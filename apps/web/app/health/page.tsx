"use client";

import { trpc } from "@/lib/trpc";

export default function Home() {
  const { data, isLoading } = trpc.userList.useQuery("Jenil");

  if (isLoading) return <div>Loading...</div>;
  return <div>{data}</div>;
}
