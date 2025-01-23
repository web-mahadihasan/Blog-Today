import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware"

export default withAuth({
  publicRoutes: ["/", "/blog/:id"],
})

export const config = {
  matcher: ["/profile"],
}

