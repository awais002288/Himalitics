import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req:any) {
  const allowedOrigin:any = process.env.NEXT_PUBLIC_API_URL; // Set your frontend origin

  if (req.nextUrl.origin !== allowedOrigin) {
    return NextResponse.json({ message: "CORS error: Unauthorized origin" }, { status: 403 });
  }

  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
  response.headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}