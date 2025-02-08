"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TRPCProvider } from "@/app/_trpc/TrpcClient";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <SessionProvider>
        <TRPCProvider>{children}</TRPCProvider>
      </SessionProvider>
    </NextThemesProvider>
  );
}
