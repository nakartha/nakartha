"use client";
import { trpc } from "@/lib/trpcClient";

export function Try() {
  const { data } = trpc.hello.useQuery({ name: "world" });
  return <div>{data?.greeting}</div>;
}
