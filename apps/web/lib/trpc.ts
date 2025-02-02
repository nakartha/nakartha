"use client";

import { createTRPCReact, CreateTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@workspace/trpc";

export const trpc: CreateTRPCReact<AppRouter, null, {}> = createTRPCReact<
  AppRouter,
  null,
  {}
>();
