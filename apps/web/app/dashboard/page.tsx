"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

function page({}: Props) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("/login");
  }

  return <div>{session.user?.email}</div>;
}

export default page;
