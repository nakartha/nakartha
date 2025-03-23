import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@workspace/api";
import { httpBatchLink } from "@trpc/client";

function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // Browser
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // Vercel
  return `http://localhost:${process.env.PORT ?? 3000}`; // Local dev
}

export const trpc = createTRPCReact<AppRouter>({
  // Optional: Define default options if needed
  // No config needed here since we'll configure it in the Provider
});

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
