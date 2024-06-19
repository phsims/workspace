import NextAuth from "next-auth"
import Cognito from "next-auth/providers/cognito"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Cognito],
  callbacks: {
    // jwt({ token, user }) {
    //   if (user) { 
    //     token.id = user.id
    //   }
    //   return token
    // },
    // session({ session, token }) {
    //   session.user.id = token.id as string;
    //   return session
    // },
  },
  
  session: {
    strategy: "jwt",
  },
})


// // app/api/auth/[...nextauth]/route.ts
// import NextAuth from "next-auth";
// import CognitoProvider from "next-auth/providers/cognito";
// import type { AuthOptions } from "next-auth";

// const authOptions: AuthOptions = {
//   providers: [
//     CognitoProvider({
//       clientId: process.env.COGNITO_CLIENT_ID!,
//       clientSecret: process.env.COGNITO_CLIENT_SECRET!,
//       issuer: process.env.COGNITO_ISSUER!,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET!,
//   session: {
//     strategy: "jwt",
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
