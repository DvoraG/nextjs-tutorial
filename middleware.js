import { NextResponse } from "next/server";

export function middleware(request) {
    return NextResponse.redirect(new URL(('/'),request.url));
}

// where middleware should be invoked
export const config = {
    matcher: ['/about/:path*']
};