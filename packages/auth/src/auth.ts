import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@workspace/db";
import { compare, hash } from "bcryptjs";
import { getServerSession } from "next-auth/next";

export async function signup(params: {
  email: string;
  password: string;
  name?: string;
}) {
  const { email, password, name } = params;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  // Hash the password
  const hashedPassword = await hash(password, 12);

  // Create the user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: name || email.split("@")[0],
      provider: "EMAIL",
      isActive: true,
    },
  });

  return {
    id: user.id.toString(),
    email: user.email,
    name: user.name,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text", optional: true },
        mode: { label: "Mode", type: "text" }, // login or signup
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        console.log(credentials);

        // Handle signup
        if (credentials.mode === "signup") {
          try {
            const user = await signup({
              email: credentials.email,
              password: credentials.password,
              name: credentials.name,
            });

            return {
              id: user.id,
              email: user.email,
              name: user.name,
              roles: [], // New users start with no roles
            };
          } catch (error: any) {
            throw new Error(error.message || "Failed to create account");
          }
        }

        // Handle login (existing code)
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          include: {
            userRoles: {
              include: {
                role: true,
              },
            },
          },
        });

        if (!user || !user.password) {
          throw new Error("No user found with this email");
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        if (!user.isActive) {
          throw new Error("User account is disabled");
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          image: user.image,
          roles: user.userRoles.map((ur) => ur.role.name),
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account }) {
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
              image: user.image,
              provider: "GOOGLE",
              isActive: true,
            },
          });
        }

        // Update user ID for the session
        user.id = dbUser.id.toString();
      }
      return true;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.roles = user.roles;
      }

      // Handle user updates
      if (trigger === "update" && session) {
        token.name = session.user.name;
        token.image = session.user.image;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.roles = token.roles as string[];
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);

export const getSession = async (options: { req: any; res: any }) => {
  return getServerSession(options.req, options.res, authOptions);
};
