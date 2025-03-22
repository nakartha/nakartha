import { PrismaClient } from "./generated/client";

declare global {
  // Allow global `prisma` to persist across hot reloads in dev
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export * from "./generated/client"; // Export types and utilities
export default prisma;
