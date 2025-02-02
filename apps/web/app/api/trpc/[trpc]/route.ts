import { appRouter, createNextApiHandler } from "@workspace/trpc";

export default createNextApiHandler({
  router: appRouter,
});
