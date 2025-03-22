"use client";

import { Button } from "@workspace/ui/components/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}!</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div>
      <Button onClick={() => signIn("google")}>Sign in with Google</Button>
    </div>
  );
}
