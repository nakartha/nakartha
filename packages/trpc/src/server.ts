import { z } from "zod";

export { createNextApiHandler } from "@trpc/server/adapters/next";

import { initTRPC } from "@trpc/server";

const t = initTRPC.create({});

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input, ctx }) => {
      console.log(ctx);
      return { greeting: `Hello, ${input.name}!` };
    }),
});

export type AppRouterType = typeof appRouter;
