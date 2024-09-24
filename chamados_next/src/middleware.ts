import withAuth from "next-auth/middleware";

// See "Matching Paths" below to learn more

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        return token ? true : false 
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
