import { AuthOptions, Session, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@workspace/prisma";
import { JWT } from "next-auth/jwt";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

console.log("Variables", process.env);

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
    session: ({ session, token }: { session: Session; token: JWT }) => {
      if (session.user) {
        (session.user as { id: string }).id = token.sub!;
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
  const session = await getServerSession(authOptions);
  return { session, prisma };
};
