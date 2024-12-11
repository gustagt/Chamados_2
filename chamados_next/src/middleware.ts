
import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
 
  if (pathname.startsWith('/chamados')){
    const cookie = request.cookies.get('user')
    const user = cookie ? JSON.parse(cookie?.value) : null 
    if(!user)  {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (pathname.startsWith('/dashboard')){
    const cookie = request.cookies.get('user-ti')
    const user = cookie ? JSON.parse(cookie?.value) : null 
    if (!user) return  NextResponse.redirect(new URL('/login-ti', request.url)); 
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/chamados/:path*","/dashboard/:path*"],
};
