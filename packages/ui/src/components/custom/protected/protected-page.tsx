"use client";

import { useRedirect } from "@workspace/lib/src/redirect/index.js";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const { redirectToLogin } = useRedirect();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirectToLogin();
    }
  }, [status, redirectToLogin]);

  if (status === "loading") {
    return <div>Loading...</div>; // Optional loading state
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return null;
};

export default ProtectedPage;
