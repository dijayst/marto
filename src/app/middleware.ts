
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const response = NextResponse.next();
response.headers.set("x-middleware-check", "working");

  response.headers.delete("x-vercel-ip-country");
  response.headers.delete("x-vercel-ip-country-region");
  response.headers.delete("x-vercel-ip-city");
  response.headers.delete("x-vercel-ip-latitude");
  response.headers.delete("x-vercel-ip-longitude");
  response.headers.delete("x-vercel-ip-timezone");

  return response;
}


export const config = {
  matcher: ["/:path*"],
};
