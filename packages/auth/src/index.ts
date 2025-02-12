import { AuthOptions, Session, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import prisma from "@workspace/prisma";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }: { token: JWT; user: User }) => {
      try {
        if (!token.email) return token;

        // Check if user exists in DB
        let existingUser = await prisma.user.findUnique({
          where: { email: token.email },
        });

        // If user doesn't exist, create a new one
        if (!existingUser) {
          existingUser = await prisma.user.create({
            data: {
              email: token.email || "",
              name: token.name || "Anonymous",
              profileImage: token.picture,
              password: "",
            },
          });
        }
      } catch (error) {
        console.error("Error in JWT callback:", error);
      }
      return token;
    },
    session: ({ session, token }: { session: Session; token: JWT }) => {
      try {
        if (session.user) {
          (session.user as { id: string }).id = token.sub!;
        }
      } catch (error) {
        console.error("Error in session callback:", error);
      }
      return session;
    },
  },
};

export type Context = {
  session: Session | null;
};

export const createContext = async (req: Request): Promise<Context> => {
  try {
    const session = await getServerSession(authOptions);
    return { session };
  } catch (error) {
    console.error("Error in createContext:", error);
    return { session: null };
  }
};
