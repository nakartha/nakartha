"use client";

import { useState } from "react";
import { cn } from "@workspace/ui/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";
import { Button } from "../button";
import { Icons } from "../Icons";
import { LoaderCircle } from "lucide-react";
import { signIn } from "next-auth/react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <div className={cn("w-full max-w-md", className)} {...props}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Welcome back
            </CardTitle>
            <CardDescription className="text-center">
              Login with your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit}>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Button
                    variant="outline"
                    type="button"
                    disabled={isLoading}
                    onClick={async () => {
                      const data = await signIn("google", {
                        callbackUrl: "/dashboard",
                      });
                    }}
                  >
                    {isLoading ? (
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Icons.google className="mr-2 h-4 w-4" />
                    )}{" "}
                    Login with Google
                  </Button>
                  {/* <Button
                    variant="outline"
                    type="button"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Icons.gitHub className="mr-2 h-4 w-4" />
                    )}{" "}
                    Login with GitHub
                  </Button> */}
                </div>
                {/* <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div> */}
                {/* <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:underline underline-offset-4"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input id="password" type="password" disabled={isLoading} />
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Login
                </Button> */}
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="mt-4 text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}
