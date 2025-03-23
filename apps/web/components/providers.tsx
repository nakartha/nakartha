"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@workspace/ui/components/sonner";
import { trpc, trpcClient } from "../lib/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {/* Wrap with tRPC and React Query providers */}
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <Toaster richColors closeButton />
          <SessionProvider>{children}</SessionProvider>
        </QueryClientProvider>
      </trpc.Provider>
    </NextThemesProvider>
  );
}
