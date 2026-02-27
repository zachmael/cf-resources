import { NextRequest, NextResponse } from 'next/server';

const BEEHIIV_PUB_ID = 'f3d1c6a6-4711-459f-b6b2-f129345f4dd9';
const BEEHIIV_API_KEY = '2w5LgZ0f9kGjn1NXOkzFE7FawZO1FyKb4mbzADqeTdyyCeowfjVc1BkX1dAo7EX1';

const recentRequests = new Map<string, number>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const last = recentRequests.get(ip);
  if (last && now - last < 10_000) return false;
  recentRequests.set(ip, now);
  // Cleanup old entries periodically
  if (recentRequests.size > 1000) {
    for (const [key, time] of recentRequests) {
      if (now - time > 60_000) recentRequests.delete(key);
    }
  }
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
  }

  try {
    const { email, source } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          utm_source: 'cf-resources',
          utm_medium: 'website',
          utm_campaign: source || 'unknown',
          referring_site: 'https://resources.councilfire.org',
        }),
      }
    );

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.error('Beehiiv error:', res.status, data);
      return NextResponse.json({ error: 'Subscription failed. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
