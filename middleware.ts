// middleware.ts
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(session, req.nextUrl.pathname);

  // Auth sayfalarını yönet
  if (
    session &&
    (req.nextUrl.pathname === "/auth/login" ||
      req.nextUrl.pathname === "/auth/register")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Korumalı rotaları yönet
  if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
    const redirectUrl = new URL("/auth/login", req.url);
    redirectUrl.searchParams.set("redirectedFrom", req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};