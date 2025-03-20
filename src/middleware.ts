import {
    DEFAULT_LOGIN_REDIRECT,
    adminRoutes,
    apiAuthPrefix,
    authRoutes,
    publicRoutes
} from "@/routes";
import NextAuth from "next-auth";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from 'next/server';
import { NextResponse } from "next/server";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const userRole = token?.role;

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (isAdminRoute) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/login", nextUrl));
    }

    if (userRole !== "ADMIN") {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle webm-wasm files
  if (pathname.startsWith('/webm-wasm/')) {
    const response = NextResponse.next();

    // Set MIME types
    if (pathname.endsWith('.js')) {
      response.headers.set('Content-Type', 'application/javascript');
    } else if (pathname.endsWith('.wasm')) {
      response.headers.set('Content-Type', 'application/wasm');
    }

    // Set CORS headers
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|mp4|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    '/webm-wasm/:path*'
  ]
};
