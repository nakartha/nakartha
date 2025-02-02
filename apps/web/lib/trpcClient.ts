"use client";
import { AppRouterType } from "@workspace/trpc/index";
import { httpBatchLink } from "@workspace/trpc/index";
import { createTRPCReact } from "@workspace/trpc/index";

export const trpc = createTRPCReact<AppRouterType>();

export const createTrpcClient = () => {
  return trpc.createClient({
    links: [httpBatchLink({ url: "/api/trpc" })],
  });
};
