import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas que requieren autenticación
const protectedRoutes = ['/dashboard', '/breast-cancer', '/prostate-cancer'];

// Rutas públicas cuando el usuario está autenticado
const authRoutes = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('user')?.value;

  if (
    !currentUser &&
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    request.cookies.delete('user');
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('user');

    return response;
  }

  if (
    currentUser &&
    authRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/dashboard/breast-cancer/:path*',
    '/dashboard/prostate-cancer/:path*',
    '/login',
    '/register',
  ],
};
