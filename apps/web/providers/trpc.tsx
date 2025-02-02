"use client";
import { createTrpcClient, trpc } from "@/lib/trpcClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function TRPCProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => createTrpcClient());

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
