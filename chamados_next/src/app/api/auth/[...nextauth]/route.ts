import { api } from "@/lib/utils/config";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from 'next-auth/react';



const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "client",
      name: "Login Cliente",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, _req) {
        const res = await fetch(api + "/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        if (res.ok && data.user) {
    
          return data.user;
        }

        return null;
      },

    }),

    CredentialsProvider({
      id:'operatorTi',
      name: "Acesso da Ti",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch(api + "/login/ti", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        if (res.ok && data.user) {
          ;
          return data.user;
        }

        return null;
      },

    })
    
  ],
  pages: {
    signIn: "/login",  
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      user && (token.role = user.role);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
   
  },
  jwt: {
    maxAge: 6 * 24 * 60 * 60,
  },
  session: {
    strategy: "jwt",
    maxAge: 6 * 24 * 60 * 60,
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
