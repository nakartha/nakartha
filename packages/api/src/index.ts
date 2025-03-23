import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const appRouter = router({
  userList: publicProcedure.input(z.string()).query(async (props) => {
    return `Hello ${props.input}`;
  }),
});

export type AppRouter = typeof appRouter;

export const createTRPCHandler = (req: Request): Promise<Response> => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req, // Pass the Request object directly
    router: appRouter,
    createContext: () => ({}), // Add context if needed
  });
};
