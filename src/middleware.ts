import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export default withAuth(
  async function middleware(request: NextRequest) {
    // console.log(request)
  }, {
    isReturnToCurrentPage: true, // if true, the user will be redirected to the page where user wanted to go to, after login
  }
)

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|$).*)",
  ]
}