import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      name: string;
      token: string;
      role: string;
    };
  }

  interface User {
    username: string;
    name: string;
    token: string;
    role: string;
  }
}
