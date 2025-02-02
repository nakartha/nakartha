import { appRouter } from "@workspace/trpc";

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const dynamic = "force-dynamic"; // Optional: disable caching

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
