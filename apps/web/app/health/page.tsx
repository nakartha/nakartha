"use client";

import { trpc } from "@workspace/trpc/src/client";
import ProtectedPage from "@workspace/ui/components/custom/protected/protected-page";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();

  const { data, isLoading } = trpc.user.protect.useQuery(undefined, {
    enabled: status === "authenticated",
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ProtectedPage>{data}</ProtectedPage>
    </div>
  );
}
