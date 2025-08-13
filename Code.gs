/**
 * Google Apps Script for Gaggar & Partners Career Form
 * Handles form submissions, file uploads, and email notifications
 */

// Configuration - Replace these with your actual IDs
const CONFIG = {
  SHEET_ID: '1tGDy2p70Qhz24VtENNKFnz1nEIK9S7KWOQ_7Ch1vroo', // Google Sheet ID from .env
  DRIVE_FOLDER_ID: '1qP8z162d-roqt6Jwz3-heB5oeWil3nhR', // Replace with your Google Drive folder ID
  NOTIFICATION_EMAIL: 'Connect@gaggarpartners.com', // Replace with your email
  ALLOWED_ORIGINS: [
    'http://localhost:3000',
    'https://yourdomain.com', // Replace with your actual domain
    'https://www.yourdomain.com'
  ]
};

/**
 * Handle POST requests (form submissions)
 */
function doPost(e) {
  try {
    // Check if postData exists
    if (!e || !e.postData || !e.postData.contents) {
      return createErrorResponse('No data received');
    }
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email) {
      return createErrorResponse('Name and email are required');
    }
    
    // Process form submission
    const formData = {
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      position: data.position || '',
      experience: data.experience || '',
      message: data.message || '',
      timestamp: new Date(),
      userAgent: e.parameters?.userAgent || 'Unknown',
      ipAddress: e.parameters?.clientIP || 'Unknown'
    };
    
    // Save form data to Google Sheets
    const sheetResult = saveToSheet(formData);
    if (!sheetResult.success) {
      Logger.log('Sheet save failed: ' + sheetResult.error);
    }
    
    // Handle file upload if present
    let driveFileUrl = null;
    let fileName = null;
    if (data.fileData && data.fileName) {
      const uploadResult = uploadToGoogleDrive(
        data.fileData, 
        data.fileName, 
        formData.name
      );
      if (uploadResult.success) {
        driveFileUrl = uploadResult.url;
        fileName = uploadResult.fileName;
      } else {
        Logger.log('File upload failed: ' + uploadResult.error);
      }
    }
    
    // Send email notification
    const emailResult = sendEmailNotification(formData, driveFileUrl, fileName);
    if (!emailResult.success) {
      Logger.log('Email send failed: ' + emailResult.error);
    }
    
    return createSuccessResponse({
      message: 'Application submitted successfully',
      fileUrl: driveFileUrl,
      fileName: fileName
    });
      
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return createErrorResponse('Submission failed. Please try again.');
  }
}

/**
 * Handle OPTIONS requests for CORS
 */
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Save form data to Google Sheets
 */
function saveToSheet(formData) {
  try {
    const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getActiveSheet();
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp', 
        'Name', 
        'Email', 
        'Phone', 
        'Position', 
        'Experience', 
        'Message',
        'User Agent',
        'IP Address'
      ];
      sheet.appendRow(headers);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0f0f0');
    }
    
    // Add the new row
    sheet.appendRow([
      formData.timestamp,
      formData.name,
      formData.email,
      formData.phone,
      formData.position,
      formData.experience,
      formData.message,
      formData.userAgent,
      formData.ipAddress
    ]);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 9);
    
    return { success: true };
    
  } catch (error) {
    Logger.log('Error saving to sheet: ' + error.toString());
    return { success: false, error: error.toString() };
  }
}

/**
 * Upload file to Google Drive
 */
function uploadToGoogleDrive(fileData, originalFileName, applicantName) {
  try {
    // Clean applicant name for filename
    const cleanName = applicantName.replace(/[^a-zA-Z0-9]/g, '_');
    const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd_HHmmss');
    const fileExtension = originalFileName.split('.').pop() || 'pdf';
    const newFileName = `${cleanName}_CV_${timestamp}.${fileExtension}`;
    
    // Decode base64 file data
    const binaryData = Utilities.base64Decode(fileData);
    
    // Determine MIME type based on file extension
    let mimeType = 'application/octet-stream';
    switch (fileExtension.toLowerCase()) {
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'doc':
        mimeType = 'application/msword';
        break;
      case 'docx':
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'txt':
        mimeType = 'text/plain';
        break;
    }
    
    // Create blob
    const blob = Utilities.newBlob(binaryData, mimeType, newFileName);
    
    // Get the destination folder
    const folder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
    
    // Create the file
    const file = folder.createFile(blob);
    
    // Set sharing permissions (viewable by anyone with link)
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // Add description
    file.setDescription(`CV/Resume uploaded by ${applicantName} on ${new Date().toISOString()}`);
    
    return { 
      success: true, 
      url: file.getUrl(),
      fileName: newFileName,
      fileId: file.getId()
    };
    
  } catch (error) {
    Logger.log('Error uploading to Drive: ' + error.toString());
    return { success: false, error: error.toString() };
  }
}

/**
 * Send email notification
 */
function sendEmailNotification(formData, fileUrl, fileName) {
  try {
    const subject = `New Career Application - ${formData.name}`;
    
    let htmlBody = `
      <h2>New Career Application Received</h2>
      
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Name:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Email:</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${formData.email}">${formData.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Phone:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Position:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.position || 'Not specified'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Experience:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.experience || 'Not specified'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Submitted:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${Utilities.formatDate(formData.timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss')}</td>
        </tr>
      </table>
      
      <h3>Message:</h3>
      <div style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; white-space: pre-wrap;">${formData.message || 'No message provided'}</div>
    `;
    
    if (fileUrl && fileName) {
      htmlBody += `
        <h3>CV/Resume:</h3>
        <p><a href="${fileUrl}" target="_blank" style="color: #0066cc; text-decoration: none;">📄 ${fileName}</a></p>
        <p><em>Click the link above to view the uploaded file in Google Drive.</em></p>
      `;
    }
    
    htmlBody += `
      <hr style="margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">
        This email was automatically generated from the Gaggar & Partners career application form.
      </p>
    `;
    
    // Plain text version
    let textBody = `
New Career Application Received

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Position: ${formData.position || 'Not specified'}
Experience: ${formData.experience || 'Not specified'}
Submitted: ${Utilities.formatDate(formData.timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss')}

Message:
${formData.message || 'No message provided'}
    `;
    
    if (fileUrl && fileName) {
      textBody += `\nCV/Resume: ${fileUrl}`;
    }
    
    // Send email
    MailApp.sendEmail({
      to: CONFIG.NOTIFICATION_EMAIL,
      subject: subject,
      body: textBody,
      htmlBody: htmlBody
    });
    
    return { success: true };
    
  } catch (error) {
    Logger.log('Error sending email: ' + error.toString());
    return { success: false, error: error.toString() };
  }
}

/**
 * Create success response
 */
function createSuccessResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      ...data
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Create error response
 */
function createErrorResponse(message) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: false,
      error: message
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify configuration
 */
function testConfiguration() {
  try {
    Logger.log('Testing configuration...');
    
    // Test sheet access
    const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    Logger.log('✓ Sheet access: OK - ' + sheet.getName());
    
    // Test folder access
    const folder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
    Logger.log('✓ Drive folder access: OK - ' + folder.getName());
    
    // Test email
    Logger.log('✓ Email configured: ' + CONFIG.NOTIFICATION_EMAIL);
    
    Logger.log('All configuration tests passed!');
    
  } catch (error) {
    Logger.log('❌ Configuration test failed: ' + error.toString());
  }
}

/**
 * Helper function to create a test Google Sheet
 */
function createTestSheet() {
  try {
    const sheet = SpreadsheetApp.create('Gaggar & Partners - Career Applications');
    Logger.log('Created test sheet with ID: ' + sheet.getId());
    Logger.log('Update CONFIG.SHEET_ID with this value: ' + sheet.getId());
    return sheet.getId();
  } catch (error) {
    Logger.log('Error creating test sheet: ' + error.toString());
  }
}

/**
 * Helper function to create a test Drive folder
 */
function createTestFolder() {
  try {
    const folder = DriveApp.createFolder('Gaggar & Partners - CV Uploads');
    Logger.log('Created test folder with ID: ' + folder.getId());
    Logger.log('Update CONFIG.DRIVE_FOLDER_ID with this value: ' + folder.getId());
    return folder.getId();
  } catch (error) {
    Logger.log('Error creating test folder: ' + error.toString());
  }
}
