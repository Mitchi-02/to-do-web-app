import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('next-auth.session-token')?.value

  const pathname = request.nextUrl.pathname

  if (requireAuth.some((path) => pathname.startsWith(path)) && !accessToken) {
    const url = new URL('/sign-in', request.url)
    return NextResponse.redirect(url)
  }
  if(requireGuest.some((path) => pathname.startsWith(path)) && accessToken) {
    const url = new URL('/profile', request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

const requireAuth = ['/profile', '/tasks']
const requireGuest = ['/sign-in', '/sign-up']

