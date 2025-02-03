import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "..";
import prisma from "@workspace/prisma";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
        id: z.number(),
      })
    )
    .query(async (opts) => {
      const user = await prisma.user.findUnique({
        where: { pk_User_UserID: opts.input.id },
      });
      return {
        greeting: `hello ${user?.User_Email}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
