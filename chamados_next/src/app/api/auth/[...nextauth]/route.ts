import { api } from "@/lib/utils/config";
import NextAuth, { NextAuthOptions } from "next-auth"
import  CredentialsProvider  from 'next-auth/providers/credentials';

const nextAuthOptions: NextAuthOptions ={
    providers: [
        CredentialsProvider({

          name: 'credentials',
          credentials:{
            username: {label: 'username', type: 'text'},
            password: {label: 'password', type: 'password'}
          },
  
          async authorize(credentials, req) {
      
            const res = await fetch(api+'/login/', {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
            const data = await res.json()
      
   
            if (res.ok && data.user) {
              return data.user
            }

            return null
          }
        })
      ],
    pages: {
        signIn: '/login',
         
    },
    callbacks:{
        async jwt({token, user}){
            user && (token.user = user)
            return token
        },
        async session({session, token}){
            session.user = token.user as any     
            return session
        }
    },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }