/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

type CreateContextOptions = Omit<CreateNextContextOptions, "info"> & {
  info?: CreateNextContextOptions["info"];
};

export type CreateInnerContextOptions = {
  sourceIp?: string;
  locale: string;
} & Partial<CreateContextOptions>;

export type InnerContext = CreateInnerContextOptions & {};

/**
 * Inner context. Will always be available in your procedures, in contrast to the outer context.
 *
 * Also useful for:
 * - testing, so you don't have to mock Next.js' `req`/`res`
 * - tRPC's `createServerSideHelpers` where we don't have `req`/`res`
 *
 * @see https://trpc.io/docs/context#inner-and-outer-context
 */
export async function createContextInner(
  opts: CreateInnerContextOptions
): Promise<InnerContext> {
  return {
    ...opts,
  };
}

type Context = InnerContext & {
  req: CreateContextOptions["req"];
  res: CreateContextOptions["res"];
};

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async ({
  req,
  res,
}: CreateContextOptions): Promise<Context> => {
  // This type may not be accurate if this request is coming from SSG init but they both should satisfy the requirements of getIP.
  // TODO: @sean - figure out a way to make getIP be happy with trpc req. params
  return {
    req,
    res,
  };
};

export type TRPCContext = Awaited<ReturnType<typeof createContext>>;
export type TRPCContextInner = Awaited<ReturnType<typeof createContextInner>>;
export type WithLocale<T extends TRPCContext = any> = T &
  Required<Pick<CreateInnerContextOptions, "i18n" | "locale">>;
export type WithSession<T extends TRPCContext = any> = T &
  Required<Pick<CreateInnerContextOptions, "session">>;
