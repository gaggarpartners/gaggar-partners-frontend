# Google Drive Integration Setup Guide

## 1. Google Cloud Console Setup

### Step 1: Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note down your project ID

### Step 2: Enable Required APIs
1. Go to **APIs & Services** > **Library**
2. Enable the following APIs:
   - **Google Drive API**
   - **Google OAuth2 API**

### Step 3: Create OAuth2 Credentials
1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **OAuth client ID**
3. Choose **Web application**
4. Add these to **Authorized redirect URIs**:
   - `http://localhost:3000/api/google-drive/callback` (for development)
   - `https://yourdomain.com/api/google-drive/callback` (for production)
5. Save the **Client ID** and **Client Secret**

## 2. Google Drive Folder Setup

### Create CV Storage Folder
1. Go to [Google Drive](https://drive.google.com/)
2. Create a new folder for CV storage (e.g., "Career Applications")
3. Right-click the folder and select **Share**
4. Copy the folder ID from the URL:
   - URL format: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`
   - Extract the `FOLDER_ID_HERE` part

## 3. Environment Variables Setup

Update your `.env.local` file with the following values:

\`\`\`env
# Google OAuth2 Credentials
GOOGLE_CLIENT_ID=your_actual_client_id_from_step_3
GOOGLE_CLIENT_SECRET=your_actual_client_secret_from_step_3
GOOGLE_REDIRECT_URI=http://localhost:3000/api/google-drive/callback

# Google Drive Configuration  
GOOGLE_DRIVE_FOLDER_ID=your_folder_id_from_step_2

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate_a_random_secret_key

# Web3Forms (if using for form submissions)
WEB3FORMS_ACCESS_KEY=your_web3forms_key_if_needed
\`\`\`

## 4. Testing the Integration

### Test the Flow
1. Start your development server: `npm run dev`
2. Go to `/career` page
3. Click "Connect to Google Drive"
4. Complete OAuth authorization
5. Try uploading a CV file
6. Check your Google Drive folder for the uploaded file

### Troubleshooting
- **Authentication Error**: Check client ID/secret and redirect URI
- **Upload Error**: Verify folder ID and API permissions
- **Token Refresh Issues**: Ensure refresh token is being stored properly

## 5. Production Deployment

### Update Environment Variables
1. Add production domain to Google OAuth redirect URIs
2. Update `NEXTAUTH_URL` to your production domain
3. Update `GOOGLE_REDIRECT_URI` to production callback URL

### Security Considerations
- Keep client secret secure
- Use HTTPS in production
- Consider implementing rate limiting
- Validate file types and sizes
- Implement proper error handling

## 6. File Organization

Uploaded files will be named with this format:
\`\`\`
{ApplicantName}_{FileType}_{Timestamp}.{Extension}
\`\`\`

Example: `John_Doe_cv_2024-01-15T10-30-00-000Z.pdf`
