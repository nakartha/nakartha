import { initTRPC } from "@trpc/server";
import { Context } from "@workspace/auth";

const t = initTRPC.context<Context>().create();

// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session) {
    throw new Error("Unauthorized");
  }
  return next();
});
