"use client";
import { trpc } from "../_trpc/TrpcClient";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { AlertCircle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert";

export default function BeautifulPage() {
  const { data, isLoading, error } = trpc.hello.useQuery({
    text: "Jenil",
    id: 1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-800">
            Welcome Message
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            Fetched using tRPC
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-8 w-full" />
          ) : error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error.message || "An error occurred while fetching the data."}
              </AlertDescription>
            </Alert>
          ) : (
            <p className="text-xl text-center font-medium text-gray-800">
              {data?.greeting}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
