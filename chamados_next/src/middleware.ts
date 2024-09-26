import withAuth from "next-auth/middleware";

// See "Matching Paths" below to learn more

export default withAuth(
  function middleware(req) {
  },
  {
    callbacks: {
       authorized: async({ req, token }) => {
        return !!token  
      },
      
    },
    pages: {
      signIn: '/login'
    },
  }
);

export const config = {
  matcher: ["/chamados/:path*"],
};
