import { NextResponse } from "next/server"
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    const pathname = req.nextUrl.pathname
    if (
      requireAuth.some((path) => pathname.startsWith(path)) &&
      !req.nextauth.token
    ) {
      const url = new URL('/sign-in', req.url)
      return NextResponse.redirect(url)
    }
    if (
      requireGuest.some((path) => pathname.startsWith(path)) &&
      req.nextauth.token
    ) {
      const url = new URL('/profile', req.url)
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized({ req, token }) {
        return true
      },
    },
  }
)


const requireAuth = ['/profile', '/tasks']
const requireGuest = ['/sign-in', '/sign-up']

