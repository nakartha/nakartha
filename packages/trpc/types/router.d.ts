declare module "client/index" {
    export * from "@trpc/client";
}
declare module "next/index" {
    export * from "@trpc/next";
}
declare module "server/index" {
    export * from "@trpc/server";
}
declare module "react/shared" {
    export * from "@trpc/react-query/shared";
    export const ENDPOINTS: readonly ["admin", "apiKeys", "appRoutingForms", "apps", "auth", "availability", "appBasecamp3", "bookings", "deploymentSetup", "dsync", "eventTypes", "features", "highPerf", "insights", "payments", "public", "timezones", "saml", "slots", "teams", "organizations", "users", "viewer", "webhook", "workflows", "appsRouter", "googleWorkspace", "oAuth", "attributes", "routingForms", "domainWideDelegation"];
}
declare module "react/trpc" {
    import type { NextPageContext } from "next/types";
    import superjson from "superjson";
    import type { CreateTRPCNext } from "next/index";
    import type { inferRouterInputs, inferRouterOutputs } from "server/index";
    import type { AppRouter } from "../server/routers/_app";
    import { ENDPOINTS } from "react/shared";
    /**
     * We deploy our tRPC router on multiple lambdas to keep number of imports as small as possible
     * TODO: Make this dynamic based on folders in trpc server?
     */
    export type Endpoint = (typeof ENDPOINTS)[number];
    /**
     * A set of strongly-typed React hooks from your `AppRouter` type signature with `createTRPCReact`.
     * @link https://trpc.io/docs/v10/react#2-create-trpc-hooks
     */
    export const trpc: CreateTRPCNext<AppRouter, NextPageContext, null>;
    export const transformer: typeof superjson;
    export type RouterInputs = inferRouterInputs<AppRouter>;
    export type RouterOutputs = inferRouterOutputs<AppRouter>;
}
declare module "react/index" {
    export * from "@trpc/react-query";
    export * from "react/trpc";
}
declare module "react/server" {
    export * from "@trpc/react-query/server";
}
declare module "react/hooks/useEmailVerifyCheck" {
    export function useEmailVerifyCheck(): any;
    export default useEmailVerifyCheck;
}
declare module "react/hooks/useMeQuery" {
    export function useMeQuery(): any;
    export default useMeQuery;
}
declare module "server/createContext" {
    import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
    import type { Session } from "next-auth";
    import type { serverSideTranslations } from "next-i18next/serverSideTranslations";
    import prisma, { readonlyPrisma } from "@calcom/prisma";
    import type { SelectedCalendar, User as PrismaUser } from "@calcom/prisma/client";
    import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
    type CreateContextOptions = (Omit<CreateNextContextOptions, "info"> & {
        info?: CreateNextContextOptions["info"];
    }) | GetServerSidePropsContext;
    export type CreateInnerContextOptions = {
        sourceIp?: string;
        session?: Session | null;
        locale: string;
        user?: Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
            locale: Exclude<PrismaUser["locale"], null>;
            credentials?: Credential[];
            selectedCalendars?: Partial<SelectedCalendar>[];
            rawAvatar?: string;
        };
        i18n?: Awaited<ReturnType<typeof serverSideTranslations>>;
    } & Partial<CreateContextOptions>;
    export type GetSessionFn = ((_options: {
        req: GetServerSidePropsContext["req"] | NextApiRequest;
        res: GetServerSidePropsContext["res"] | NextApiResponse;
    }) => Promise<Session | null>) | (() => Promise<Session | null>);
    export type InnerContext = CreateInnerContextOptions & {
        prisma: typeof prisma;
        insightsDb: typeof readonlyPrisma;
    };
    /**
     * Inner context. Will always be available in your procedures, in contrast to the outer context.
     *
     * Also useful for:
     * - testing, so you don't have to mock Next.js' `req`/`res`
     * - tRPC's `createServerSideHelpers` where we don't have `req`/`res`
     *
     * @see https://trpc.io/docs/context#inner-and-outer-context
     */
    export function createContextInner(opts: CreateInnerContextOptions): Promise<InnerContext>;
    type Context = InnerContext & {
        req: CreateContextOptions["req"];
        res: CreateContextOptions["res"];
    };
    /**
     * Creates context for an incoming request
     * @link https://trpc.io/docs/context
     */
    export const createContext: ({ req, res }: CreateContextOptions, sessionGetter?: GetSessionFn) => Promise<Context>;
    export type TRPCContext = Awaited<ReturnType<typeof createContext>>;
    export type TRPCContextInner = Awaited<ReturnType<typeof createContextInner>>;
    export type WithLocale<T extends TRPCContext = any> = T & Required<Pick<CreateInnerContextOptions, "i18n" | "locale">>;
    export type WithSession<T extends TRPCContext = any> = T & Required<Pick<CreateInnerContextOptions, "session">>;
}
declare module "server/createNextApiHandler" {
    import type { AnyRouter } from "@trpc/server";
    /**
     * Creates an API handler executed by Next.js.
     */
    export function createNextApiHandler(router: AnyRouter, isPublic?: boolean, namespace?: string): import("@trpc/server/adapters/next").NextApiHandler<any>;
}
declare module "server/trpc" {
    import superjson from "superjson";
    import type { UserFromSession } from "./middlewares/sessionMiddleware";
    export const tRPCContext: {
        _config: import("@trpc/server/unstable-core-do-not-import").RootConfig<{
            ctx: {
                sourceIp?: string | undefined;
                session?: any;
                locale: string;
                user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
                    locale: any;
                    credentials?: Credential[] | undefined;
                    selectedCalendars?: SelectedCalendar[] | undefined;
                    rawAvatar?: string | undefined;
                }) | undefined;
                i18n?: any;
            } & Partial<any> & {
                prisma: any;
                insightsDb: any;
            };
            meta: object;
            errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
            transformer: typeof superjson;
        }>;
        procedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
            sourceIp?: string | undefined;
            session?: any;
            locale: string;
            user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
                locale: any;
                credentials?: Credential[] | undefined;
                selectedCalendars?: SelectedCalendar[] | undefined;
                rawAvatar?: string | undefined;
            }) | undefined;
            i18n?: any;
        } & Partial<any> & {
            prisma: any;
            insightsDb: any;
        }, object, object, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker>;
        middleware: <$ContextOverrides>(fn: import("@trpc/server/unstable-core-do-not-import").MiddlewareFunction<{
            sourceIp?: string | undefined;
            session?: any;
            locale: string;
            user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
                locale: any;
                credentials?: Credential[] | undefined;
                selectedCalendars?: SelectedCalendar[] | undefined;
                rawAvatar?: string | undefined;
            }) | undefined;
            i18n?: any;
        } & Partial<any> & {
            prisma: any;
            insightsDb: any;
        }, object, object, $ContextOverrides, unknown>) => import("@trpc/server/unstable-core-do-not-import").MiddlewareBuilder<{
            sourceIp?: string | undefined;
            session?: any;
            locale: string;
            user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
                locale: any;
                credentials?: Credential[] | undefined;
                selectedCalendars?: SelectedCalendar[] | undefined;
                rawAvatar?: string | undefined;
            }) | undefined;
            i18n?: any;
        } & Partial<any> & {
            prisma: any;
            insightsDb: any;
        }, object, $ContextOverrides, unknown>;
        router: <TProcRouterRecord extends import("@trpc/server").TRPCProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server/unstable-core-do-not-import").CreateRouterInner<import("@trpc/server/unstable-core-do-not-import").RootConfig<{
            ctx: {
                sourceIp?: string | undefined;
                session?: any;
                locale: string;
                user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
                    locale: any;
                    credentials?: Credential[] | undefined;
                    selectedCalendars?: SelectedCalendar[] | undefined;
                    rawAvatar?: string | undefined;
                }) | undefined;
                i18n?: any;
            } & Partial<any> & {
                prisma: any;
                insightsDb: any;
            };
            meta: object;
            errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
            transformer: typeof superjson;
        }>, TProcRouterRecord>;
        mergeRouters: typeof import("@trpc/server/unstable-core-do-not-import").mergeRouters;
        createCallerFactory: <TRouter extends import("@trpc/server/unstable-core-do-not-import").Router<import("@trpc/server/unstable-core-do-not-import").AnyRouterDef<import("@trpc/server/unstable-core-do-not-import").RootConfig<{
            ctx: {
                sourceIp?: string | undefined;
                session?: any;
                locale: string;
                user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
                    locale: any;
                    credentials?: Credential[] | undefined;
                    selectedCalendars?: SelectedCalendar[] | undefined;
                    rawAvatar?: string | undefined;
                }) | undefined;
                i18n?: any;
            } & Partial<any> & {
                prisma: any;
                insightsDb: any;
            };
            meta: object;
            errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
            transformer: typeof superjson;
        }>>>>(router: TRouter) => import("@trpc/server/unstable-core-do-not-import").RouterCaller<TRouter["_def"]>;
    };
    export const router: <TProcRouterRecord extends import("@trpc/server").TRPCProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server/unstable-core-do-not-import").CreateRouterInner<import("@trpc/server/unstable-core-do-not-import").RootConfig<{
        ctx: {
            sourceIp?: string | undefined;
            session?: any;
            locale: string;
            user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
                locale: any;
                credentials?: Credential[] | undefined;
                selectedCalendars?: SelectedCalendar[] | undefined;
                rawAvatar?: string | undefined;
            }) | undefined;
            i18n?: any;
        } & Partial<any> & {
            prisma: any;
            insightsDb: any;
        };
        meta: object;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: typeof superjson;
    }>, TProcRouterRecord>;
    export const mergeRouters: typeof import("@trpc/server/unstable-core-do-not-import").mergeRouters;
    export const middleware: <$ContextOverrides>(fn: import("@trpc/server/unstable-core-do-not-import").MiddlewareFunction<{
        sourceIp?: string | undefined;
        session?: any;
        locale: string;
        user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
            locale: any;
            credentials?: Credential[] | undefined;
            selectedCalendars?: SelectedCalendar[] | undefined;
            rawAvatar?: string | undefined;
        }) | undefined;
        i18n?: any;
    } & Partial<any> & {
        prisma: any;
        insightsDb: any;
    }, object, object, $ContextOverrides, unknown>) => import("@trpc/server/unstable-core-do-not-import").MiddlewareBuilder<{
        sourceIp?: string | undefined;
        session?: any;
        locale: string;
        user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
            locale: any;
            credentials?: Credential[] | undefined;
            selectedCalendars?: SelectedCalendar[] | undefined;
            rawAvatar?: string | undefined;
        }) | undefined;
        i18n?: any;
    } & Partial<any> & {
        prisma: any;
        insightsDb: any;
    }, object, $ContextOverrides, unknown>;
    export const procedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
        sourceIp?: string | undefined;
        session?: any;
        locale: string;
        user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
            locale: any;
            credentials?: Credential[] | undefined;
            selectedCalendars?: SelectedCalendar[] | undefined;
            rawAvatar?: string | undefined;
        }) | undefined;
        i18n?: any;
    } & Partial<any> & {
        prisma: any;
        insightsDb: any;
    }, object, object, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker>;
    export const createCallerFactory: <TRouter extends import("@trpc/server/unstable-core-do-not-import").Router<import("@trpc/server/unstable-core-do-not-import").AnyRouterDef<import("@trpc/server/unstable-core-do-not-import").RootConfig<{
        ctx: {
            sourceIp?: string | undefined;
            session?: any;
            locale: string;
            user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
                locale: any;
                credentials?: Credential[] | undefined;
                selectedCalendars?: SelectedCalendar[] | undefined;
                rawAvatar?: string | undefined;
            }) | undefined;
            i18n?: any;
        } & Partial<any> & {
            prisma: any;
            insightsDb: any;
        };
        meta: object;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: typeof superjson;
    }>>>>(router: TRouter) => import("@trpc/server/unstable-core-do-not-import").RouterCaller<TRouter["_def"]>;
    export type TrpcSessionUser = UserFromSession;
    /**
     * This function will import the module defined in importer just once and then cache the default export of that module.
     *
     * It gives you the default export of the module.
     *
     * **Note: It is your job to ensure that the name provided is unique across all routes.**
     * @example
     * ```ts
    const handler = await importHandler("myUniqueNameSpace", () => import("./getUser.handler"));
    return handler({ ctx, input });
     * ```
     */
    export const importHandler: <T extends {
        default: Function;
    }>(name: string, importer: () => Promise<T>) => Promise<T["default"]>;
}
declare module "server/adapters/next" {
    export * from "@trpc/server/adapters/next";
}
declare module "server/procedures/publicProcedure" {
    const publicProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
        sourceIp?: string | undefined;
        session?: any;
        locale: string;
        user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
            locale: any;
            credentials?: Credential[] | undefined;
            selectedCalendars?: SelectedCalendar[] | undefined;
            rawAvatar?: string | undefined;
        }) | undefined;
        i18n?: any;
    } & Partial<any> & {
        prisma: any;
        insightsDb: any;
    }, object, {}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker>;
    export default publicProcedure;
}
declare module "server/procedures/authedProcedure" {
    const authedProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
        sourceIp?: string | undefined;
        session?: any;
        locale: string;
        user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
            locale: any;
            credentials?: Credential[] | undefined;
            selectedCalendars?: SelectedCalendar[] | undefined;
            rawAvatar?: string | undefined;
        }) | undefined;
        i18n?: any;
    } & Partial<any> & {
        prisma: any;
        insightsDb: any;
    }, object, {}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker>;
    export const authedAdminProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
        sourceIp?: string | undefined;
        session?: any;
        locale: string;
        user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
            locale: any;
            credentials?: Credential[] | undefined;
            selectedCalendars?: SelectedCalendar[] | undefined;
            rawAvatar?: string | undefined;
        }) | undefined;
        i18n?: any;
    } & Partial<any> & {
        prisma: any;
        insightsDb: any;
    }, object, {}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker>;
    export const authedOrgAdminProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
        sourceIp?: string | undefined;
        session?: any;
        locale: string;
        user?: (Omit<PrismaUser, "locale" | "twoFactorSecret" | "emailVerified" | "password" | "identityProviderId" | "invitedTo" | "allowDynamicBooking" | "verified"> & {
            locale: any;
            credentials?: Credential[] | undefined;
            selectedCalendars?: SelectedCalendar[] | undefined;
            rawAvatar?: string | undefined;
        }) | undefined;
        i18n?: any;
    } & Partial<any> & {
        prisma: any;
        insightsDb: any;
    }, object, {}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker>;
    export default authedProcedure;
}
