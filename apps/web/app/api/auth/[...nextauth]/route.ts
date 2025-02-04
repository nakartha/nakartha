import NextAuth from "next-auth";
import { authOptions } from "@workspace/auth"; // Adjust based on your turborepo setup

const handler = NextAuth(authOptions); // ✅ No more errors
export { handler as GET, handler as POST };
