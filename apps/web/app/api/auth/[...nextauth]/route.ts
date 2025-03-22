// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google"; // Example provider

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID || "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import { NextAuth } from "@workspace/auth";

export { NextAuth as GET, NextAuth as POST };
