import { AuthOptions, Session, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@workspace/prisma";
import { JWT } from "next-auth/jwt";

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
          where: { User_Email: token.email },
        });

        // If user doesn't exist, create a new one
        if (!existingUser) {
          existingUser = await prisma.user.create({
            data: {
              User_Email: token.email || "",
              User_Name: token.name || "Anonymous",
              User_Password: "",
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
  prisma: typeof prisma;
};

export const createContext = async (req: Request): Promise<Context> => {
  try {
    const session = await getServerSession(authOptions);
    return { session, prisma };
  } catch (error) {
    console.error("Error in createContext:", error);
    return { session: null, prisma };
  }
};
