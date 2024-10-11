import withAuth from "next-auth/middleware";
import { redirect } from "next/navigation";

// See "Matching Paths" below to learn more

export default withAuth(
  function middleware(req) {
    
  },
  {
    callbacks: {
       authorized: async({ req, token}) => {
        if(req.nextUrl.pathname.startsWith('/chamados')){
          return token?.role === "client"
        }
        if(req.nextUrl.pathname.startsWith('/dashboard')){
          return token?.role === "ti"
        }
        return false
      },
      
    },
    pages: {
      signIn: '/login'
    },
  }
);

export const config = {
  matcher: ["/chamados/:path*","/dashboard/:path*"],
};
