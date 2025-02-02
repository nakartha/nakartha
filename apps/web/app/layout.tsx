import { Inter } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { TRPCProvider } from "@/providers/trpc";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased `}>
        <TRPCProvider>
          <Providers>{children}</Providers>
        </TRPCProvider>
      </body>
    </html>
  );
}
