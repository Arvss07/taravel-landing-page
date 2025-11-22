import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  // Force HTTPS redirect in production (Vercel handles this automatically, but good to have)
  if (
    process.env.NODE_ENV === 'production' &&
    request.headers.get('x-forwarded-proto') !== 'https'
  ) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url);
  }

  // Security headers (additional layer)
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Bot protection - simple user agent check (can be enhanced)
  const userAgent = request.headers.get('user-agent') || '';
  const suspiciousPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i
  ];

  // Allow legitimate bots (search engines)
  const legitimateBots = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /linkedinbot/i
  ];

  const isLegitimateBot = legitimateBots.some(pattern => pattern.test(userAgent));
  const isSuspiciousBot = !isLegitimateBot && suspiciousPatterns.some(pattern => pattern.test(userAgent));

  // Rate limiting headers for download paths (if needed)
  if (pathname.includes('/download') || pathname.includes('/api')) {
    response.headers.set('X-RateLimit-Limit', '10');
    response.headers.set('X-RateLimit-Window', '60');
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};

