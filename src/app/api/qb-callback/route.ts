import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  const realmId = req.nextUrl.searchParams.get('realmId');
  const state = req.nextUrl.searchParams.get('state');

  const html = `<!DOCTYPE html>
<html>
<body style="font-family: system-ui; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #111; color: white;">
  <div style="text-align: center; max-width: 500px;">
    <h1 style="color: #258193;">✅ QuickBooks Connected!</h1>
    <p>Copy the values below and send them to Lili:</p>
    <div style="background: #222; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: left; word-break: break-all;">
      <p><strong>Code:</strong> <code>${code}</code></p>
      <p><strong>Company ID:</strong> <code>${realmId}</code></p>
    </div>
    <p style="color: #666; font-size: 14px;">You can close this tab after copying.</p>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
