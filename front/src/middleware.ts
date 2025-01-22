import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const protectedRoutes = ['/dashboard', '/breast-cancer', '/prostate-cancer'];
  const publicRoutes = ['/login', '/register'];

  const isAuthRoute = publicRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  // Verificar la existencia del token en las cookies
  const authToken = request.cookies.get('authToken')?.value;

  if (!authToken && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (authToken && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/register',
    '/breast-cancer',
    '/prostate-cancer',
  ],
};
