"use client";
import { FC } from "react";
import { trpc } from "../_trpc/TrpcClient";

export const Profile: FC = () => {
  const { isLoading, data } = trpc.me.useQuery();

  if (isLoading) return <div>Loading data.</div>;

  return (
    <div className="h-full w-full flex items-center justify-center gap-2">
      {data?.profileImage && <img src={data?.profileImage} alt="image" />}
      {`Hii ${data?.name}`}
    </div>
  );
};
