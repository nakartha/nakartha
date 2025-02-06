"use client";

import { useSession } from "next-auth/react";
import Content from "./Content";
import Layout from "./layout";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("/login");
  }

  return (
    <Layout>
      <Content />
    </Layout>
  );
}
