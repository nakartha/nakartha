import { router } from "./trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { userRouter } from "./routers/user";
import { getSession } from "@workspace/auth";

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;

export const createTRPCHandler = (req: Request): Promise<Response> => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => {
      try {
        // Create a mock response object for getSession
        const res = {
          getHeader: () => "",
          setHeader: () => {},
          // Add other methods if needed
        };

        const session = await getSession({
          req,
          res,
        });

        return {
          session,
          req,
        };
      } catch (error) {
        console.error("Error creating context:", error);
        return {
          session: null,
          req,
        };
      }
    },
    onError: ({ error, path }) => {
      console.error(`Error in tRPC handler at ${path}:`, error);
    },
    responseMeta: () => {
      return {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "*",
          "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
          "Access-Control-Allow-Headers": "*",
        },
      };
    },
  });
};
