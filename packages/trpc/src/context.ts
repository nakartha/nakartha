import { getSession } from "@workspace/auth";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getSession({
    req: opts.req,
    res: opts.res,
  });
  return {
    session,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
