import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.headers.get('Authentication') === 'true') {
    return NextResponse.redirect(new URL('/api/auth', request.url));
  }

  return NextResponse.json({ name: 'Unauthorized' }, { status: 401 })
}
 
export const config = {
  matcher: '/api/auth/:path*',
}