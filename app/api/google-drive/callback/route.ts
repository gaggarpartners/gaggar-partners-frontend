import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      console.error('OAuth error:', error);
      const redirectUrl = new URL('/career', request.url);
      redirectUrl.searchParams.set('error', error);
      return NextResponse.redirect(redirectUrl);
    }

    if (!code) {
      const redirectUrl = new URL('/career', request.url);
      redirectUrl.searchParams.set('error', 'no_code');
      return NextResponse.redirect(redirectUrl);
    }

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI || `${process.env.NEXTAUTH_URL}/api/google-drive/callback`;

    if (!clientId || !clientSecret) {
      const redirectUrl = new URL('/career', request.url);
      redirectUrl.searchParams.set('error', 'config_missing');
      return NextResponse.redirect(redirectUrl);
    }

    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error('Token exchange failed:', errorData);
      const redirectUrl = new URL('/career', request.url);
      redirectUrl.searchParams.set('error', 'token_exchange_failed');
      return NextResponse.redirect(redirectUrl);
    }

    const tokens = await tokenResponse.json();

    // Redirect back to career page with tokens
    const redirectUrl = new URL('/career', request.url);
    redirectUrl.searchParams.set('access_token', tokens.access_token);
    if (tokens.refresh_token) {
      redirectUrl.searchParams.set('refresh_token', tokens.refresh_token);
    }
    redirectUrl.searchParams.set('auth_success', 'true');

    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error('Callback error:', error);
    const redirectUrl = new URL('/career', request.url);
    redirectUrl.searchParams.set('error', 'callback_error');
    return NextResponse.redirect(redirectUrl);
  }
}
