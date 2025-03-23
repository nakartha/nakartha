import { initTRPC } from "@trpc/server";
import type { AnyZodObject } from "zod";
import { Context } from "./context";

type OpenApiMeta = {
  openapi?: {
    enabled?: boolean;
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
    path: `/${string}`;
    summary?: string;
    description?: string;
    protect?: boolean;
    tags?: string[];
    // eslint-disable-next-line @typescript-eslint/ban-types
    contentTypes?: (
      | "application/json"
      | "application/x-www-form-urlencoded"
      | (string & {})
    )[];
    deprecated?: boolean;
    requestHeaders?: AnyZodObject;
    responseHeaders?: AnyZodObject;
    successDescription?: string;
    errorResponses?: number[] | Record<number, string>;
  };
} & Record<string, unknown>;

const t = initTRPC.meta<OpenApiMeta>().context<Context>().create();

const isAuthed = t.middleware(({ ctx, next }) => {
  console.log(ctx);
  if (!ctx.session || !ctx.session.user) {
    throw new Error("NOT_FOUND");
  }
  return next({
    ctx: {
      session: ctx.session,
    },
  });
});

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
export const router = t.router;
