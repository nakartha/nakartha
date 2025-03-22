import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@workspace/db";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with your auth logic (e.g., API call or database check)
        if (
          credentials?.email === "user@example.com" &&
          credentials?.password === "password"
        ) {
          return { id: "1", name: "Test User", email: "user@example.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async signIn({ user, account }) {
      // Handle Google sign-in
      if (account?.provider === "google") {
        let dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!dbUser) {
          // New Google user: create them
          dbUser = await prisma.user.create({
            data: {
              email: user.email!,
              name: user.name || user.email!.split("@")[0],
              // No password for Google users
            },
          });
        }

        // Update user ID for the session
        user.id = dbUser.id.toString();
      }
      return true; // Allow sign-in
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
