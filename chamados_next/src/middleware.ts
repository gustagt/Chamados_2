import withAuth from "next-auth/middleware";

// See "Matching Paths" below to learn more

export default withAuth(
 
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
