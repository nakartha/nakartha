import { createTRPCRouter, protectedProcedure } from "..";
import prisma from "@workspace/prisma";

export const appRouter = createTRPCRouter({
  me: protectedProcedure.query(({ ctx }) => {
    const email = ctx.session?.user?.email;
    if (!email) {
      throw new Error("Unauthorized");
    }
    const user = prisma.user.findUnique({ where: { email } });
    return user;
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
