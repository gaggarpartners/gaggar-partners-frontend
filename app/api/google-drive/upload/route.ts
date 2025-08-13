import { NextRequest, NextResponse } from 'next/server';

interface GoogleDriveFile {
  id: string;
  name: string;
  webViewLink: string;
}

async function refreshAccessToken(refreshToken: string): Promise<string | null> {
  try {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      console.error('Missing Google OAuth credentials');
      return null;
    }

    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Token refresh failed:', errorData);
      return null;
    }

    const tokens = await response.json();
    return tokens.access_token;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
}

async function uploadToGoogleDrive(
  file: File,
  accessToken: string,
  fileName: string,
  folderId?: string
): Promise<GoogleDriveFile | null> {
  try {
    // First, create file metadata
    const metadata = {
      name: fileName,
      parents: folderId ? [folderId] : undefined,
    };

    // Convert file to buffer
    const buffer = await file.arrayBuffer();

    // Create multipart form data
    const boundary = '-------314159265358979323846';
    const delimiter = `\r\n--${boundary}\r\n`;
    const close_delim = `\r\n--${boundary}--`;

    let body = delimiter;
    body += 'Content-Type: application/json\r\n\r\n';
    body += JSON.stringify(metadata) + delimiter;
    body += `Content-Type: ${file.type}\r\n\r\n`;

    const uint8Array = new Uint8Array(buffer);
    const bodyParts = [
      new TextEncoder().encode(body),
      uint8Array,
      new TextEncoder().encode(close_delim)
    ];

    // Calculate total length
    const totalLength = bodyParts.reduce((acc, part) => acc + part.length, 0);
    
    // Combine all parts
    const combinedBody = new Uint8Array(totalLength);
    let offset = 0;
    bodyParts.forEach(part => {
      combinedBody.set(part, offset);
      offset += part.length;
    });

    const response = await fetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': `multipart/related; boundary="${boundary}"`,
        },
        body: combinedBody,
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Google Drive upload failed:', errorData);
      return null;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error uploading to Google Drive:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    let accessToken = formData.get('accessToken') as string;
    const refreshToken = formData.get('refreshToken') as string;
    const applicantName = formData.get('applicantName') as string || 'Unknown';
    const fileType = formData.get('fileType') as string || 'document';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!accessToken) {
      return NextResponse.json(
        { error: 'No access token provided' },
        { status: 401 }
      );
    }

    // Generate unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileExtension = file.name.split('.').pop() || 'pdf';
    const fileName = `${applicantName}_${fileType}_${timestamp}.${fileExtension}`;

    // Try to upload with current access token (no folder ID = uploads to root)
    let result = await uploadToGoogleDrive(
      file,
      accessToken,
      fileName
    );

    // If upload failed and we have refresh token, try to refresh access token
    if (!result && refreshToken) {
      console.log('Upload failed, trying to refresh access token...');
      const newAccessToken = await refreshAccessToken(refreshToken);
      
      if (newAccessToken) {
        accessToken = newAccessToken;
        result = await uploadToGoogleDrive(
          file,
          accessToken,
          fileName
        );
      }
    }

    if (!result) {
      return NextResponse.json(
        { error: 'Failed to upload file to Google Drive' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      file: result,
      message: 'File uploaded successfully'
    });

  } catch (error) {
    console.error('Upload API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
