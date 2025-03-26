
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model GroupMemberBalance
 * 
 */
export type GroupMemberBalance = $Result.DefaultSelection<Prisma.$GroupMemberBalancePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model TransactionParticipant
 * 
 */
export type TransactionParticipant = $Result.DefaultSelection<Prisma.$TransactionParticipantPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Provider: {
  EMAIL: 'EMAIL',
  GOOGLE: 'GOOGLE',
  GITHUB: 'GITHUB',
  DISCORD: 'DISCORD'
};

export type Provider = (typeof Provider)[keyof typeof Provider]

}

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMemberBalance`: Exposes CRUD operations for the **GroupMemberBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMemberBalances
    * const groupMemberBalances = await prisma.groupMemberBalance.findMany()
    * ```
    */
  get groupMemberBalance(): Prisma.GroupMemberBalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionParticipant`: Exposes CRUD operations for the **TransactionParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionParticipants
    * const transactionParticipants = await prisma.transactionParticipant.findMany()
    * ```
    */
  get transactionParticipant(): Prisma.TransactionParticipantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    Group: 'Group',
    GroupMember: 'GroupMember',
    GroupMemberBalance: 'GroupMemberBalance',
    Transaction: 'Transaction',
    TransactionParticipant: 'TransactionParticipant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "userRole" | "group" | "groupMember" | "groupMemberBalance" | "transaction" | "transactionParticipant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      GroupMemberBalance: {
        payload: Prisma.$GroupMemberBalancePayload<ExtArgs>
        fields: Prisma.GroupMemberBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload>
          }
          findFirst: {
            args: Prisma.GroupMemberBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload>
          }
          findMany: {
            args: Prisma.GroupMemberBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload>[]
          }
          create: {
            args: Prisma.GroupMemberBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload>
          }
          createMany: {
            args: Prisma.GroupMemberBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload>[]
          }
          delete: {
            args: Prisma.GroupMemberBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload>
          }
          update: {
            args: Prisma.GroupMemberBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberBalancePayload>
          }
          aggregate: {
            args: Prisma.GroupMemberBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMemberBalance>
          }
          groupBy: {
            args: Prisma.GroupMemberBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberBalanceCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      TransactionParticipant: {
        payload: Prisma.$TransactionParticipantPayload<ExtArgs>
        fields: Prisma.TransactionParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload>
          }
          findFirst: {
            args: Prisma.TransactionParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload>
          }
          findMany: {
            args: Prisma.TransactionParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload>[]
          }
          create: {
            args: Prisma.TransactionParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload>
          }
          createMany: {
            args: Prisma.TransactionParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload>[]
          }
          delete: {
            args: Prisma.TransactionParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload>
          }
          update: {
            args: Prisma.TransactionParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload>
          }
          deleteMany: {
            args: Prisma.TransactionParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload>[]
          }
          upsert: {
            args: Prisma.TransactionParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParticipantPayload>
          }
          aggregate: {
            args: Prisma.TransactionParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionParticipant>
          }
          groupBy: {
            args: Prisma.TransactionParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
    group?: GroupOmit
    groupMember?: GroupMemberOmit
    groupMemberBalance?: GroupMemberBalanceOmit
    transaction?: TransactionOmit
    transactionParticipant?: TransactionParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userRoles: number
    groups: number
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    userRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | RoleCountOutputTypeCountUserRolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    transactions: number
    balances: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    transactions?: boolean | GroupCountOutputTypeCountTransactionsArgs
    balances?: boolean | GroupCountOutputTypeCountBalancesArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberBalanceWhereInput
  }


  /**
   * Count Type GroupMemberCountOutputType
   */

  export type GroupMemberCountOutputType = {
    owedBalances: number
    owingBalances: number
    paidTransactions: number
    participatedTransactions: number
  }

  export type GroupMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owedBalances?: boolean | GroupMemberCountOutputTypeCountOwedBalancesArgs
    owingBalances?: boolean | GroupMemberCountOutputTypeCountOwingBalancesArgs
    paidTransactions?: boolean | GroupMemberCountOutputTypeCountPaidTransactionsArgs
    participatedTransactions?: boolean | GroupMemberCountOutputTypeCountParticipatedTransactionsArgs
  }

  // Custom InputTypes
  /**
   * GroupMemberCountOutputType without action
   */
  export type GroupMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberCountOutputType
     */
    select?: GroupMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupMemberCountOutputType without action
   */
  export type GroupMemberCountOutputTypeCountOwedBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberBalanceWhereInput
  }

  /**
   * GroupMemberCountOutputType without action
   */
  export type GroupMemberCountOutputTypeCountOwingBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberBalanceWhereInput
  }

  /**
   * GroupMemberCountOutputType without action
   */
  export type GroupMemberCountOutputTypeCountPaidTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * GroupMemberCountOutputType without action
   */
  export type GroupMemberCountOutputTypeCountParticipatedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionParticipantWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    participants: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | TransactionCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    provider: $Enums.Provider | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    provider: $Enums.Provider | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    image: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    isActive: number
    provider: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    provider?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    provider?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    provider?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date
    updatedAt: Date | null
    isActive: boolean
    provider: $Enums.Provider
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    provider?: boolean
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    provider?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    provider?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    provider?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "image" | "emailVerified" | "createdAt" | "updatedAt" | "isActive" | "provider", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
      groups: Prisma.$GroupMemberPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string | null
      image: string | null
      emailVerified: Date | null
      createdAt: Date
      updatedAt: Date | null
      isActive: boolean
      provider: $Enums.Provider
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends User$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly provider: FieldRef<"User", 'Provider'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userRoles
   */
  export type User$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    permissions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    permissions: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userRoles?: boolean | Role$userRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "permissions" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | Role$userRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      permissions: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends Role$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly permissions: FieldRef<"Role", 'Json'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.userRoles
   */
  export type Role$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    userId: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    userId: number
    roleId: number
    createdAt: Date
    updatedAt: Date
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roleId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'Int'>
    readonly userId: FieldRef<"UserRole", 'Int'>
    readonly roleId: FieldRef<"UserRole", 'Int'>
    readonly createdAt: FieldRef<"UserRole", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Group$membersArgs<ExtArgs>
    transactions?: boolean | Group$transactionsArgs<ExtArgs>
    balances?: boolean | Group$balancesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Group$membersArgs<ExtArgs>
    transactions?: boolean | Group$transactionsArgs<ExtArgs>
    balances?: boolean | Group$balancesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      balances: Prisma.$GroupMemberBalancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Group$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Group$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    balances<T extends Group$balancesArgs<ExtArgs> = {}>(args?: Subset<T, Group$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Group.transactions
   */
  export type Group$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Group.balances
   */
  export type Group$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    where?: GroupMemberBalanceWhereInput
    orderBy?: GroupMemberBalanceOrderByWithRelationInput | GroupMemberBalanceOrderByWithRelationInput[]
    cursor?: GroupMemberBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberBalanceScalarFieldEnum | GroupMemberBalanceScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _avg: GroupMemberAvgAggregateOutputType | null
    _sum: GroupMemberSumAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
    userId: number | null
  }

  export type GroupMemberSumAggregateOutputType = {
    id: number | null
    groupId: number | null
    userId: number | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: number | null
    groupId: number | null
    userId: number | null
    joinedAt: Date | null
    isAdmin: boolean | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: number | null
    groupId: number | null
    userId: number | null
    joinedAt: Date | null
    isAdmin: boolean | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    joinedAt: number
    isAdmin: number
    _all: number
  }


  export type GroupMemberAvgAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
  }

  export type GroupMemberSumAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
  }

  export type GroupMemberMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
    isAdmin?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
    isAdmin?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
    isAdmin?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _avg?: GroupMemberAvgAggregateInputType
    _sum?: GroupMemberSumAggregateInputType
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: number
    groupId: number
    userId: number
    joinedAt: Date
    isAdmin: boolean
    _count: GroupMemberCountAggregateOutputType | null
    _avg: GroupMemberAvgAggregateOutputType | null
    _sum: GroupMemberSumAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    isAdmin?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    owedBalances?: boolean | GroupMember$owedBalancesArgs<ExtArgs>
    owingBalances?: boolean | GroupMember$owingBalancesArgs<ExtArgs>
    paidTransactions?: boolean | GroupMember$paidTransactionsArgs<ExtArgs>
    participatedTransactions?: boolean | GroupMember$participatedTransactionsArgs<ExtArgs>
    _count?: boolean | GroupMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    isAdmin?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    isAdmin?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    isAdmin?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "joinedAt" | "isAdmin", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    owedBalances?: boolean | GroupMember$owedBalancesArgs<ExtArgs>
    owingBalances?: boolean | GroupMember$owingBalancesArgs<ExtArgs>
    paidTransactions?: boolean | GroupMember$paidTransactionsArgs<ExtArgs>
    participatedTransactions?: boolean | GroupMember$participatedTransactionsArgs<ExtArgs>
    _count?: boolean | GroupMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      owedBalances: Prisma.$GroupMemberBalancePayload<ExtArgs>[]
      owingBalances: Prisma.$GroupMemberBalancePayload<ExtArgs>[]
      paidTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      participatedTransactions: Prisma.$TransactionParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupId: number
      userId: number
      joinedAt: Date
      isAdmin: boolean
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owedBalances<T extends GroupMember$owedBalancesArgs<ExtArgs> = {}>(args?: Subset<T, GroupMember$owedBalancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owingBalances<T extends GroupMember$owingBalancesArgs<ExtArgs> = {}>(args?: Subset<T, GroupMember$owingBalancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paidTransactions<T extends GroupMember$paidTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, GroupMember$paidTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participatedTransactions<T extends GroupMember$participatedTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, GroupMember$participatedTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupMember model
   */ 
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'Int'>
    readonly groupId: FieldRef<"GroupMember", 'Int'>
    readonly userId: FieldRef<"GroupMember", 'Int'>
    readonly joinedAt: FieldRef<"GroupMember", 'DateTime'>
    readonly isAdmin: FieldRef<"GroupMember", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember.owedBalances
   */
  export type GroupMember$owedBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    where?: GroupMemberBalanceWhereInput
    orderBy?: GroupMemberBalanceOrderByWithRelationInput | GroupMemberBalanceOrderByWithRelationInput[]
    cursor?: GroupMemberBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberBalanceScalarFieldEnum | GroupMemberBalanceScalarFieldEnum[]
  }

  /**
   * GroupMember.owingBalances
   */
  export type GroupMember$owingBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    where?: GroupMemberBalanceWhereInput
    orderBy?: GroupMemberBalanceOrderByWithRelationInput | GroupMemberBalanceOrderByWithRelationInput[]
    cursor?: GroupMemberBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberBalanceScalarFieldEnum | GroupMemberBalanceScalarFieldEnum[]
  }

  /**
   * GroupMember.paidTransactions
   */
  export type GroupMember$paidTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * GroupMember.participatedTransactions
   */
  export type GroupMember$participatedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    where?: TransactionParticipantWhereInput
    orderBy?: TransactionParticipantOrderByWithRelationInput | TransactionParticipantOrderByWithRelationInput[]
    cursor?: TransactionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionParticipantScalarFieldEnum | TransactionParticipantScalarFieldEnum[]
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model GroupMemberBalance
   */

  export type AggregateGroupMemberBalance = {
    _count: GroupMemberBalanceCountAggregateOutputType | null
    _avg: GroupMemberBalanceAvgAggregateOutputType | null
    _sum: GroupMemberBalanceSumAggregateOutputType | null
    _min: GroupMemberBalanceMinAggregateOutputType | null
    _max: GroupMemberBalanceMaxAggregateOutputType | null
  }

  export type GroupMemberBalanceAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
    owedByMemberId: number | null
    owedToMemberId: number | null
    amount: Decimal | null
  }

  export type GroupMemberBalanceSumAggregateOutputType = {
    id: number | null
    groupId: number | null
    owedByMemberId: number | null
    owedToMemberId: number | null
    amount: Decimal | null
  }

  export type GroupMemberBalanceMinAggregateOutputType = {
    id: number | null
    groupId: number | null
    owedByMemberId: number | null
    owedToMemberId: number | null
    amount: Decimal | null
    lastUpdated: Date | null
  }

  export type GroupMemberBalanceMaxAggregateOutputType = {
    id: number | null
    groupId: number | null
    owedByMemberId: number | null
    owedToMemberId: number | null
    amount: Decimal | null
    lastUpdated: Date | null
  }

  export type GroupMemberBalanceCountAggregateOutputType = {
    id: number
    groupId: number
    owedByMemberId: number
    owedToMemberId: number
    amount: number
    lastUpdated: number
    _all: number
  }


  export type GroupMemberBalanceAvgAggregateInputType = {
    id?: true
    groupId?: true
    owedByMemberId?: true
    owedToMemberId?: true
    amount?: true
  }

  export type GroupMemberBalanceSumAggregateInputType = {
    id?: true
    groupId?: true
    owedByMemberId?: true
    owedToMemberId?: true
    amount?: true
  }

  export type GroupMemberBalanceMinAggregateInputType = {
    id?: true
    groupId?: true
    owedByMemberId?: true
    owedToMemberId?: true
    amount?: true
    lastUpdated?: true
  }

  export type GroupMemberBalanceMaxAggregateInputType = {
    id?: true
    groupId?: true
    owedByMemberId?: true
    owedToMemberId?: true
    amount?: true
    lastUpdated?: true
  }

  export type GroupMemberBalanceCountAggregateInputType = {
    id?: true
    groupId?: true
    owedByMemberId?: true
    owedToMemberId?: true
    amount?: true
    lastUpdated?: true
    _all?: true
  }

  export type GroupMemberBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMemberBalance to aggregate.
     */
    where?: GroupMemberBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMemberBalances to fetch.
     */
    orderBy?: GroupMemberBalanceOrderByWithRelationInput | GroupMemberBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMemberBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMemberBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMemberBalances
    **/
    _count?: true | GroupMemberBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupMemberBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupMemberBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberBalanceMaxAggregateInputType
  }

  export type GetGroupMemberBalanceAggregateType<T extends GroupMemberBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMemberBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMemberBalance[P]>
      : GetScalarType<T[P], AggregateGroupMemberBalance[P]>
  }




  export type GroupMemberBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberBalanceWhereInput
    orderBy?: GroupMemberBalanceOrderByWithAggregationInput | GroupMemberBalanceOrderByWithAggregationInput[]
    by: GroupMemberBalanceScalarFieldEnum[] | GroupMemberBalanceScalarFieldEnum
    having?: GroupMemberBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberBalanceCountAggregateInputType | true
    _avg?: GroupMemberBalanceAvgAggregateInputType
    _sum?: GroupMemberBalanceSumAggregateInputType
    _min?: GroupMemberBalanceMinAggregateInputType
    _max?: GroupMemberBalanceMaxAggregateInputType
  }

  export type GroupMemberBalanceGroupByOutputType = {
    id: number
    groupId: number
    owedByMemberId: number
    owedToMemberId: number
    amount: Decimal
    lastUpdated: Date
    _count: GroupMemberBalanceCountAggregateOutputType | null
    _avg: GroupMemberBalanceAvgAggregateOutputType | null
    _sum: GroupMemberBalanceSumAggregateOutputType | null
    _min: GroupMemberBalanceMinAggregateOutputType | null
    _max: GroupMemberBalanceMaxAggregateOutputType | null
  }

  type GetGroupMemberBalanceGroupByPayload<T extends GroupMemberBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberBalanceGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    owedByMemberId?: boolean
    owedToMemberId?: boolean
    amount?: boolean
    lastUpdated?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    owedBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
    owedTo?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMemberBalance"]>

  export type GroupMemberBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    owedByMemberId?: boolean
    owedToMemberId?: boolean
    amount?: boolean
    lastUpdated?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    owedBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
    owedTo?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMemberBalance"]>

  export type GroupMemberBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    owedByMemberId?: boolean
    owedToMemberId?: boolean
    amount?: boolean
    lastUpdated?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    owedBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
    owedTo?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMemberBalance"]>

  export type GroupMemberBalanceSelectScalar = {
    id?: boolean
    groupId?: boolean
    owedByMemberId?: boolean
    owedToMemberId?: boolean
    amount?: boolean
    lastUpdated?: boolean
  }

  export type GroupMemberBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "owedByMemberId" | "owedToMemberId" | "amount" | "lastUpdated", ExtArgs["result"]["groupMemberBalance"]>
  export type GroupMemberBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    owedBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
    owedTo?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }
  export type GroupMemberBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    owedBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
    owedTo?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }
  export type GroupMemberBalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    owedBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
    owedTo?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }

  export type $GroupMemberBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMemberBalance"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      owedBy: Prisma.$GroupMemberPayload<ExtArgs>
      owedTo: Prisma.$GroupMemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupId: number
      owedByMemberId: number
      owedToMemberId: number
      amount: Prisma.Decimal
      lastUpdated: Date
    }, ExtArgs["result"]["groupMemberBalance"]>
    composites: {}
  }

  type GroupMemberBalanceGetPayload<S extends boolean | null | undefined | GroupMemberBalanceDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberBalancePayload, S>

  type GroupMemberBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberBalanceCountAggregateInputType | true
    }

  export interface GroupMemberBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMemberBalance'], meta: { name: 'GroupMemberBalance' } }
    /**
     * Find zero or one GroupMemberBalance that matches the filter.
     * @param {GroupMemberBalanceFindUniqueArgs} args - Arguments to find a GroupMemberBalance
     * @example
     * // Get one GroupMemberBalance
     * const groupMemberBalance = await prisma.groupMemberBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberBalanceFindUniqueArgs>(args: SelectSubset<T, GroupMemberBalanceFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberBalanceClient<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMemberBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberBalanceFindUniqueOrThrowArgs} args - Arguments to find a GroupMemberBalance
     * @example
     * // Get one GroupMemberBalance
     * const groupMemberBalance = await prisma.groupMemberBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberBalanceClient<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMemberBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberBalanceFindFirstArgs} args - Arguments to find a GroupMemberBalance
     * @example
     * // Get one GroupMemberBalance
     * const groupMemberBalance = await prisma.groupMemberBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberBalanceFindFirstArgs>(args?: SelectSubset<T, GroupMemberBalanceFindFirstArgs<ExtArgs>>): Prisma__GroupMemberBalanceClient<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMemberBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberBalanceFindFirstOrThrowArgs} args - Arguments to find a GroupMemberBalance
     * @example
     * // Get one GroupMemberBalance
     * const groupMemberBalance = await prisma.groupMemberBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberBalanceClient<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMemberBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMemberBalances
     * const groupMemberBalances = await prisma.groupMemberBalance.findMany()
     * 
     * // Get first 10 GroupMemberBalances
     * const groupMemberBalances = await prisma.groupMemberBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberBalanceWithIdOnly = await prisma.groupMemberBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberBalanceFindManyArgs>(args?: SelectSubset<T, GroupMemberBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMemberBalance.
     * @param {GroupMemberBalanceCreateArgs} args - Arguments to create a GroupMemberBalance.
     * @example
     * // Create one GroupMemberBalance
     * const GroupMemberBalance = await prisma.groupMemberBalance.create({
     *   data: {
     *     // ... data to create a GroupMemberBalance
     *   }
     * })
     * 
     */
    create<T extends GroupMemberBalanceCreateArgs>(args: SelectSubset<T, GroupMemberBalanceCreateArgs<ExtArgs>>): Prisma__GroupMemberBalanceClient<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMemberBalances.
     * @param {GroupMemberBalanceCreateManyArgs} args - Arguments to create many GroupMemberBalances.
     * @example
     * // Create many GroupMemberBalances
     * const groupMemberBalance = await prisma.groupMemberBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberBalanceCreateManyArgs>(args?: SelectSubset<T, GroupMemberBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMemberBalances and returns the data saved in the database.
     * @param {GroupMemberBalanceCreateManyAndReturnArgs} args - Arguments to create many GroupMemberBalances.
     * @example
     * // Create many GroupMemberBalances
     * const groupMemberBalance = await prisma.groupMemberBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMemberBalances and only return the `id`
     * const groupMemberBalanceWithIdOnly = await prisma.groupMemberBalance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMemberBalance.
     * @param {GroupMemberBalanceDeleteArgs} args - Arguments to delete one GroupMemberBalance.
     * @example
     * // Delete one GroupMemberBalance
     * const GroupMemberBalance = await prisma.groupMemberBalance.delete({
     *   where: {
     *     // ... filter to delete one GroupMemberBalance
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberBalanceDeleteArgs>(args: SelectSubset<T, GroupMemberBalanceDeleteArgs<ExtArgs>>): Prisma__GroupMemberBalanceClient<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMemberBalance.
     * @param {GroupMemberBalanceUpdateArgs} args - Arguments to update one GroupMemberBalance.
     * @example
     * // Update one GroupMemberBalance
     * const groupMemberBalance = await prisma.groupMemberBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberBalanceUpdateArgs>(args: SelectSubset<T, GroupMemberBalanceUpdateArgs<ExtArgs>>): Prisma__GroupMemberBalanceClient<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMemberBalances.
     * @param {GroupMemberBalanceDeleteManyArgs} args - Arguments to filter GroupMemberBalances to delete.
     * @example
     * // Delete a few GroupMemberBalances
     * const { count } = await prisma.groupMemberBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberBalanceDeleteManyArgs>(args?: SelectSubset<T, GroupMemberBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMemberBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMemberBalances
     * const groupMemberBalance = await prisma.groupMemberBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberBalanceUpdateManyArgs>(args: SelectSubset<T, GroupMemberBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMemberBalances and returns the data updated in the database.
     * @param {GroupMemberBalanceUpdateManyAndReturnArgs} args - Arguments to update many GroupMemberBalances.
     * @example
     * // Update many GroupMemberBalances
     * const groupMemberBalance = await prisma.groupMemberBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMemberBalances and only return the `id`
     * const groupMemberBalanceWithIdOnly = await prisma.groupMemberBalance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupMemberBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMemberBalance.
     * @param {GroupMemberBalanceUpsertArgs} args - Arguments to update or create a GroupMemberBalance.
     * @example
     * // Update or create a GroupMemberBalance
     * const groupMemberBalance = await prisma.groupMemberBalance.upsert({
     *   create: {
     *     // ... data to create a GroupMemberBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMemberBalance we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberBalanceUpsertArgs>(args: SelectSubset<T, GroupMemberBalanceUpsertArgs<ExtArgs>>): Prisma__GroupMemberBalanceClient<$Result.GetResult<Prisma.$GroupMemberBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMemberBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberBalanceCountArgs} args - Arguments to filter GroupMemberBalances to count.
     * @example
     * // Count the number of GroupMemberBalances
     * const count = await prisma.groupMemberBalance.count({
     *   where: {
     *     // ... the filter for the GroupMemberBalances we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberBalanceCountArgs>(
      args?: Subset<T, GroupMemberBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMemberBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMemberBalanceAggregateArgs>(args: Subset<T, GroupMemberBalanceAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberBalanceAggregateType<T>>

    /**
     * Group by GroupMemberBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberBalanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMemberBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberBalanceGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberBalanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMemberBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMemberBalance model
   */
  readonly fields: GroupMemberBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMemberBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owedBy<T extends GroupMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupMemberDefaultArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owedTo<T extends GroupMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupMemberDefaultArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupMemberBalance model
   */ 
  interface GroupMemberBalanceFieldRefs {
    readonly id: FieldRef<"GroupMemberBalance", 'Int'>
    readonly groupId: FieldRef<"GroupMemberBalance", 'Int'>
    readonly owedByMemberId: FieldRef<"GroupMemberBalance", 'Int'>
    readonly owedToMemberId: FieldRef<"GroupMemberBalance", 'Int'>
    readonly amount: FieldRef<"GroupMemberBalance", 'Decimal'>
    readonly lastUpdated: FieldRef<"GroupMemberBalance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMemberBalance findUnique
   */
  export type GroupMemberBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    /**
     * Filter, which GroupMemberBalance to fetch.
     */
    where: GroupMemberBalanceWhereUniqueInput
  }

  /**
   * GroupMemberBalance findUniqueOrThrow
   */
  export type GroupMemberBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    /**
     * Filter, which GroupMemberBalance to fetch.
     */
    where: GroupMemberBalanceWhereUniqueInput
  }

  /**
   * GroupMemberBalance findFirst
   */
  export type GroupMemberBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    /**
     * Filter, which GroupMemberBalance to fetch.
     */
    where?: GroupMemberBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMemberBalances to fetch.
     */
    orderBy?: GroupMemberBalanceOrderByWithRelationInput | GroupMemberBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMemberBalances.
     */
    cursor?: GroupMemberBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMemberBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMemberBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMemberBalances.
     */
    distinct?: GroupMemberBalanceScalarFieldEnum | GroupMemberBalanceScalarFieldEnum[]
  }

  /**
   * GroupMemberBalance findFirstOrThrow
   */
  export type GroupMemberBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    /**
     * Filter, which GroupMemberBalance to fetch.
     */
    where?: GroupMemberBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMemberBalances to fetch.
     */
    orderBy?: GroupMemberBalanceOrderByWithRelationInput | GroupMemberBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMemberBalances.
     */
    cursor?: GroupMemberBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMemberBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMemberBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMemberBalances.
     */
    distinct?: GroupMemberBalanceScalarFieldEnum | GroupMemberBalanceScalarFieldEnum[]
  }

  /**
   * GroupMemberBalance findMany
   */
  export type GroupMemberBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    /**
     * Filter, which GroupMemberBalances to fetch.
     */
    where?: GroupMemberBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMemberBalances to fetch.
     */
    orderBy?: GroupMemberBalanceOrderByWithRelationInput | GroupMemberBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMemberBalances.
     */
    cursor?: GroupMemberBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMemberBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMemberBalances.
     */
    skip?: number
    distinct?: GroupMemberBalanceScalarFieldEnum | GroupMemberBalanceScalarFieldEnum[]
  }

  /**
   * GroupMemberBalance create
   */
  export type GroupMemberBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMemberBalance.
     */
    data: XOR<GroupMemberBalanceCreateInput, GroupMemberBalanceUncheckedCreateInput>
  }

  /**
   * GroupMemberBalance createMany
   */
  export type GroupMemberBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMemberBalances.
     */
    data: GroupMemberBalanceCreateManyInput | GroupMemberBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMemberBalance createManyAndReturn
   */
  export type GroupMemberBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMemberBalances.
     */
    data: GroupMemberBalanceCreateManyInput | GroupMemberBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMemberBalance update
   */
  export type GroupMemberBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMemberBalance.
     */
    data: XOR<GroupMemberBalanceUpdateInput, GroupMemberBalanceUncheckedUpdateInput>
    /**
     * Choose, which GroupMemberBalance to update.
     */
    where: GroupMemberBalanceWhereUniqueInput
  }

  /**
   * GroupMemberBalance updateMany
   */
  export type GroupMemberBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMemberBalances.
     */
    data: XOR<GroupMemberBalanceUpdateManyMutationInput, GroupMemberBalanceUncheckedUpdateManyInput>
    /**
     * Filter which GroupMemberBalances to update
     */
    where?: GroupMemberBalanceWhereInput
    /**
     * Limit how many GroupMemberBalances to update.
     */
    limit?: number
  }

  /**
   * GroupMemberBalance updateManyAndReturn
   */
  export type GroupMemberBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * The data used to update GroupMemberBalances.
     */
    data: XOR<GroupMemberBalanceUpdateManyMutationInput, GroupMemberBalanceUncheckedUpdateManyInput>
    /**
     * Filter which GroupMemberBalances to update
     */
    where?: GroupMemberBalanceWhereInput
    /**
     * Limit how many GroupMemberBalances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMemberBalance upsert
   */
  export type GroupMemberBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMemberBalance to update in case it exists.
     */
    where: GroupMemberBalanceWhereUniqueInput
    /**
     * In case the GroupMemberBalance found by the `where` argument doesn't exist, create a new GroupMemberBalance with this data.
     */
    create: XOR<GroupMemberBalanceCreateInput, GroupMemberBalanceUncheckedCreateInput>
    /**
     * In case the GroupMemberBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberBalanceUpdateInput, GroupMemberBalanceUncheckedUpdateInput>
  }

  /**
   * GroupMemberBalance delete
   */
  export type GroupMemberBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
    /**
     * Filter which GroupMemberBalance to delete.
     */
    where: GroupMemberBalanceWhereUniqueInput
  }

  /**
   * GroupMemberBalance deleteMany
   */
  export type GroupMemberBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMemberBalances to delete
     */
    where?: GroupMemberBalanceWhereInput
    /**
     * Limit how many GroupMemberBalances to delete.
     */
    limit?: number
  }

  /**
   * GroupMemberBalance without action
   */
  export type GroupMemberBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberBalance
     */
    select?: GroupMemberBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMemberBalance
     */
    omit?: GroupMemberBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberBalanceInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    groupId: number | null
    createdById: number | null
    paidByMemberId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    groupId: number | null
    createdById: number | null
    paidByMemberId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    description: string | null
    amount: Decimal | null
    groupId: number | null
    createdById: number | null
    paidByMemberId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    description: string | null
    amount: Decimal | null
    groupId: number | null
    createdById: number | null
    paidByMemberId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    groupId: number
    createdById: number
    paidByMemberId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    groupId?: true
    createdById?: true
    paidByMemberId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    amount?: true
    groupId?: true
    createdById?: true
    paidByMemberId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    groupId?: true
    createdById?: true
    paidByMemberId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    groupId?: true
    createdById?: true
    paidByMemberId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    groupId?: true
    createdById?: true
    paidByMemberId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    description: string
    amount: Decimal
    groupId: number
    createdById: number
    paidByMemberId: number
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    groupId?: boolean
    createdById?: boolean
    paidByMemberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    paidBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
    participants?: boolean | Transaction$participantsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    groupId?: boolean
    createdById?: boolean
    paidByMemberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    paidBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    groupId?: boolean
    createdById?: boolean
    paidByMemberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    paidBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    groupId?: boolean
    createdById?: boolean
    paidByMemberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "groupId" | "createdById" | "paidByMemberId" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    paidBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
    participants?: boolean | Transaction$participantsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    paidBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    paidBy?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      paidBy: Prisma.$GroupMemberPayload<ExtArgs>
      participants: Prisma.$TransactionParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      amount: Prisma.Decimal
      groupId: number
      createdById: number
      paidByMemberId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paidBy<T extends GroupMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupMemberDefaultArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Transaction$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly groupId: FieldRef<"Transaction", 'Int'>
    readonly createdById: FieldRef<"Transaction", 'Int'>
    readonly paidByMemberId: FieldRef<"Transaction", 'Int'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.participants
   */
  export type Transaction$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    where?: TransactionParticipantWhereInput
    orderBy?: TransactionParticipantOrderByWithRelationInput | TransactionParticipantOrderByWithRelationInput[]
    cursor?: TransactionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionParticipantScalarFieldEnum | TransactionParticipantScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model TransactionParticipant
   */

  export type AggregateTransactionParticipant = {
    _count: TransactionParticipantCountAggregateOutputType | null
    _avg: TransactionParticipantAvgAggregateOutputType | null
    _sum: TransactionParticipantSumAggregateOutputType | null
    _min: TransactionParticipantMinAggregateOutputType | null
    _max: TransactionParticipantMaxAggregateOutputType | null
  }

  export type TransactionParticipantAvgAggregateOutputType = {
    id: number | null
    transactionId: number | null
    memberId: number | null
    splitAmount: Decimal | null
  }

  export type TransactionParticipantSumAggregateOutputType = {
    id: number | null
    transactionId: number | null
    memberId: number | null
    splitAmount: Decimal | null
  }

  export type TransactionParticipantMinAggregateOutputType = {
    id: number | null
    transactionId: number | null
    memberId: number | null
    splitAmount: Decimal | null
  }

  export type TransactionParticipantMaxAggregateOutputType = {
    id: number | null
    transactionId: number | null
    memberId: number | null
    splitAmount: Decimal | null
  }

  export type TransactionParticipantCountAggregateOutputType = {
    id: number
    transactionId: number
    memberId: number
    splitAmount: number
    _all: number
  }


  export type TransactionParticipantAvgAggregateInputType = {
    id?: true
    transactionId?: true
    memberId?: true
    splitAmount?: true
  }

  export type TransactionParticipantSumAggregateInputType = {
    id?: true
    transactionId?: true
    memberId?: true
    splitAmount?: true
  }

  export type TransactionParticipantMinAggregateInputType = {
    id?: true
    transactionId?: true
    memberId?: true
    splitAmount?: true
  }

  export type TransactionParticipantMaxAggregateInputType = {
    id?: true
    transactionId?: true
    memberId?: true
    splitAmount?: true
  }

  export type TransactionParticipantCountAggregateInputType = {
    id?: true
    transactionId?: true
    memberId?: true
    splitAmount?: true
    _all?: true
  }

  export type TransactionParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionParticipant to aggregate.
     */
    where?: TransactionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionParticipants to fetch.
     */
    orderBy?: TransactionParticipantOrderByWithRelationInput | TransactionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionParticipants
    **/
    _count?: true | TransactionParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionParticipantMaxAggregateInputType
  }

  export type GetTransactionParticipantAggregateType<T extends TransactionParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionParticipant[P]>
      : GetScalarType<T[P], AggregateTransactionParticipant[P]>
  }




  export type TransactionParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionParticipantWhereInput
    orderBy?: TransactionParticipantOrderByWithAggregationInput | TransactionParticipantOrderByWithAggregationInput[]
    by: TransactionParticipantScalarFieldEnum[] | TransactionParticipantScalarFieldEnum
    having?: TransactionParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionParticipantCountAggregateInputType | true
    _avg?: TransactionParticipantAvgAggregateInputType
    _sum?: TransactionParticipantSumAggregateInputType
    _min?: TransactionParticipantMinAggregateInputType
    _max?: TransactionParticipantMaxAggregateInputType
  }

  export type TransactionParticipantGroupByOutputType = {
    id: number
    transactionId: number
    memberId: number
    splitAmount: Decimal
    _count: TransactionParticipantCountAggregateOutputType | null
    _avg: TransactionParticipantAvgAggregateOutputType | null
    _sum: TransactionParticipantSumAggregateOutputType | null
    _min: TransactionParticipantMinAggregateOutputType | null
    _max: TransactionParticipantMaxAggregateOutputType | null
  }

  type GetTransactionParticipantGroupByPayload<T extends TransactionParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionParticipantGroupByOutputType[P]>
        }
      >
    >


  export type TransactionParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    memberId?: boolean
    splitAmount?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    member?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionParticipant"]>

  export type TransactionParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    memberId?: boolean
    splitAmount?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    member?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionParticipant"]>

  export type TransactionParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    memberId?: boolean
    splitAmount?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    member?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionParticipant"]>

  export type TransactionParticipantSelectScalar = {
    id?: boolean
    transactionId?: boolean
    memberId?: boolean
    splitAmount?: boolean
  }

  export type TransactionParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "memberId" | "splitAmount", ExtArgs["result"]["transactionParticipant"]>
  export type TransactionParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    member?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }
  export type TransactionParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    member?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }
  export type TransactionParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    member?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }

  export type $TransactionParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionParticipant"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>
      member: Prisma.$GroupMemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transactionId: number
      memberId: number
      splitAmount: Prisma.Decimal
    }, ExtArgs["result"]["transactionParticipant"]>
    composites: {}
  }

  type TransactionParticipantGetPayload<S extends boolean | null | undefined | TransactionParticipantDefaultArgs> = $Result.GetResult<Prisma.$TransactionParticipantPayload, S>

  type TransactionParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionParticipantCountAggregateInputType | true
    }

  export interface TransactionParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionParticipant'], meta: { name: 'TransactionParticipant' } }
    /**
     * Find zero or one TransactionParticipant that matches the filter.
     * @param {TransactionParticipantFindUniqueArgs} args - Arguments to find a TransactionParticipant
     * @example
     * // Get one TransactionParticipant
     * const transactionParticipant = await prisma.transactionParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionParticipantFindUniqueArgs>(args: SelectSubset<T, TransactionParticipantFindUniqueArgs<ExtArgs>>): Prisma__TransactionParticipantClient<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionParticipantFindUniqueOrThrowArgs} args - Arguments to find a TransactionParticipant
     * @example
     * // Get one TransactionParticipant
     * const transactionParticipant = await prisma.transactionParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionParticipantClient<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParticipantFindFirstArgs} args - Arguments to find a TransactionParticipant
     * @example
     * // Get one TransactionParticipant
     * const transactionParticipant = await prisma.transactionParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionParticipantFindFirstArgs>(args?: SelectSubset<T, TransactionParticipantFindFirstArgs<ExtArgs>>): Prisma__TransactionParticipantClient<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParticipantFindFirstOrThrowArgs} args - Arguments to find a TransactionParticipant
     * @example
     * // Get one TransactionParticipant
     * const transactionParticipant = await prisma.transactionParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionParticipantClient<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionParticipants
     * const transactionParticipants = await prisma.transactionParticipant.findMany()
     * 
     * // Get first 10 TransactionParticipants
     * const transactionParticipants = await prisma.transactionParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionParticipantWithIdOnly = await prisma.transactionParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionParticipantFindManyArgs>(args?: SelectSubset<T, TransactionParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionParticipant.
     * @param {TransactionParticipantCreateArgs} args - Arguments to create a TransactionParticipant.
     * @example
     * // Create one TransactionParticipant
     * const TransactionParticipant = await prisma.transactionParticipant.create({
     *   data: {
     *     // ... data to create a TransactionParticipant
     *   }
     * })
     * 
     */
    create<T extends TransactionParticipantCreateArgs>(args: SelectSubset<T, TransactionParticipantCreateArgs<ExtArgs>>): Prisma__TransactionParticipantClient<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionParticipants.
     * @param {TransactionParticipantCreateManyArgs} args - Arguments to create many TransactionParticipants.
     * @example
     * // Create many TransactionParticipants
     * const transactionParticipant = await prisma.transactionParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionParticipantCreateManyArgs>(args?: SelectSubset<T, TransactionParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionParticipants and returns the data saved in the database.
     * @param {TransactionParticipantCreateManyAndReturnArgs} args - Arguments to create many TransactionParticipants.
     * @example
     * // Create many TransactionParticipants
     * const transactionParticipant = await prisma.transactionParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionParticipants and only return the `id`
     * const transactionParticipantWithIdOnly = await prisma.transactionParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionParticipant.
     * @param {TransactionParticipantDeleteArgs} args - Arguments to delete one TransactionParticipant.
     * @example
     * // Delete one TransactionParticipant
     * const TransactionParticipant = await prisma.transactionParticipant.delete({
     *   where: {
     *     // ... filter to delete one TransactionParticipant
     *   }
     * })
     * 
     */
    delete<T extends TransactionParticipantDeleteArgs>(args: SelectSubset<T, TransactionParticipantDeleteArgs<ExtArgs>>): Prisma__TransactionParticipantClient<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionParticipant.
     * @param {TransactionParticipantUpdateArgs} args - Arguments to update one TransactionParticipant.
     * @example
     * // Update one TransactionParticipant
     * const transactionParticipant = await prisma.transactionParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionParticipantUpdateArgs>(args: SelectSubset<T, TransactionParticipantUpdateArgs<ExtArgs>>): Prisma__TransactionParticipantClient<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionParticipants.
     * @param {TransactionParticipantDeleteManyArgs} args - Arguments to filter TransactionParticipants to delete.
     * @example
     * // Delete a few TransactionParticipants
     * const { count } = await prisma.transactionParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionParticipantDeleteManyArgs>(args?: SelectSubset<T, TransactionParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionParticipants
     * const transactionParticipant = await prisma.transactionParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionParticipantUpdateManyArgs>(args: SelectSubset<T, TransactionParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionParticipants and returns the data updated in the database.
     * @param {TransactionParticipantUpdateManyAndReturnArgs} args - Arguments to update many TransactionParticipants.
     * @example
     * // Update many TransactionParticipants
     * const transactionParticipant = await prisma.transactionParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionParticipants and only return the `id`
     * const transactionParticipantWithIdOnly = await prisma.transactionParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionParticipant.
     * @param {TransactionParticipantUpsertArgs} args - Arguments to update or create a TransactionParticipant.
     * @example
     * // Update or create a TransactionParticipant
     * const transactionParticipant = await prisma.transactionParticipant.upsert({
     *   create: {
     *     // ... data to create a TransactionParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionParticipant we want to update
     *   }
     * })
     */
    upsert<T extends TransactionParticipantUpsertArgs>(args: SelectSubset<T, TransactionParticipantUpsertArgs<ExtArgs>>): Prisma__TransactionParticipantClient<$Result.GetResult<Prisma.$TransactionParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParticipantCountArgs} args - Arguments to filter TransactionParticipants to count.
     * @example
     * // Count the number of TransactionParticipants
     * const count = await prisma.transactionParticipant.count({
     *   where: {
     *     // ... the filter for the TransactionParticipants we want to count
     *   }
     * })
    **/
    count<T extends TransactionParticipantCountArgs>(
      args?: Subset<T, TransactionParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionParticipantAggregateArgs>(args: Subset<T, TransactionParticipantAggregateArgs>): Prisma.PrismaPromise<GetTransactionParticipantAggregateType<T>>

    /**
     * Group by TransactionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionParticipantGroupByArgs['orderBy'] }
        : { orderBy?: TransactionParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionParticipant model
   */
  readonly fields: TransactionParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends GroupMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupMemberDefaultArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionParticipant model
   */ 
  interface TransactionParticipantFieldRefs {
    readonly id: FieldRef<"TransactionParticipant", 'Int'>
    readonly transactionId: FieldRef<"TransactionParticipant", 'Int'>
    readonly memberId: FieldRef<"TransactionParticipant", 'Int'>
    readonly splitAmount: FieldRef<"TransactionParticipant", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * TransactionParticipant findUnique
   */
  export type TransactionParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which TransactionParticipant to fetch.
     */
    where: TransactionParticipantWhereUniqueInput
  }

  /**
   * TransactionParticipant findUniqueOrThrow
   */
  export type TransactionParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which TransactionParticipant to fetch.
     */
    where: TransactionParticipantWhereUniqueInput
  }

  /**
   * TransactionParticipant findFirst
   */
  export type TransactionParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which TransactionParticipant to fetch.
     */
    where?: TransactionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionParticipants to fetch.
     */
    orderBy?: TransactionParticipantOrderByWithRelationInput | TransactionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionParticipants.
     */
    cursor?: TransactionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionParticipants.
     */
    distinct?: TransactionParticipantScalarFieldEnum | TransactionParticipantScalarFieldEnum[]
  }

  /**
   * TransactionParticipant findFirstOrThrow
   */
  export type TransactionParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which TransactionParticipant to fetch.
     */
    where?: TransactionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionParticipants to fetch.
     */
    orderBy?: TransactionParticipantOrderByWithRelationInput | TransactionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionParticipants.
     */
    cursor?: TransactionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionParticipants.
     */
    distinct?: TransactionParticipantScalarFieldEnum | TransactionParticipantScalarFieldEnum[]
  }

  /**
   * TransactionParticipant findMany
   */
  export type TransactionParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which TransactionParticipants to fetch.
     */
    where?: TransactionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionParticipants to fetch.
     */
    orderBy?: TransactionParticipantOrderByWithRelationInput | TransactionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionParticipants.
     */
    cursor?: TransactionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionParticipants.
     */
    skip?: number
    distinct?: TransactionParticipantScalarFieldEnum | TransactionParticipantScalarFieldEnum[]
  }

  /**
   * TransactionParticipant create
   */
  export type TransactionParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionParticipant.
     */
    data: XOR<TransactionParticipantCreateInput, TransactionParticipantUncheckedCreateInput>
  }

  /**
   * TransactionParticipant createMany
   */
  export type TransactionParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionParticipants.
     */
    data: TransactionParticipantCreateManyInput | TransactionParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionParticipant createManyAndReturn
   */
  export type TransactionParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionParticipants.
     */
    data: TransactionParticipantCreateManyInput | TransactionParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionParticipant update
   */
  export type TransactionParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionParticipant.
     */
    data: XOR<TransactionParticipantUpdateInput, TransactionParticipantUncheckedUpdateInput>
    /**
     * Choose, which TransactionParticipant to update.
     */
    where: TransactionParticipantWhereUniqueInput
  }

  /**
   * TransactionParticipant updateMany
   */
  export type TransactionParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionParticipants.
     */
    data: XOR<TransactionParticipantUpdateManyMutationInput, TransactionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which TransactionParticipants to update
     */
    where?: TransactionParticipantWhereInput
    /**
     * Limit how many TransactionParticipants to update.
     */
    limit?: number
  }

  /**
   * TransactionParticipant updateManyAndReturn
   */
  export type TransactionParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * The data used to update TransactionParticipants.
     */
    data: XOR<TransactionParticipantUpdateManyMutationInput, TransactionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which TransactionParticipants to update
     */
    where?: TransactionParticipantWhereInput
    /**
     * Limit how many TransactionParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionParticipant upsert
   */
  export type TransactionParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionParticipant to update in case it exists.
     */
    where: TransactionParticipantWhereUniqueInput
    /**
     * In case the TransactionParticipant found by the `where` argument doesn't exist, create a new TransactionParticipant with this data.
     */
    create: XOR<TransactionParticipantCreateInput, TransactionParticipantUncheckedCreateInput>
    /**
     * In case the TransactionParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionParticipantUpdateInput, TransactionParticipantUncheckedUpdateInput>
  }

  /**
   * TransactionParticipant delete
   */
  export type TransactionParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
    /**
     * Filter which TransactionParticipant to delete.
     */
    where: TransactionParticipantWhereUniqueInput
  }

  /**
   * TransactionParticipant deleteMany
   */
  export type TransactionParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionParticipants to delete
     */
    where?: TransactionParticipantWhereInput
    /**
     * Limit how many TransactionParticipants to delete.
     */
    limit?: number
  }

  /**
   * TransactionParticipant without action
   */
  export type TransactionParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParticipant
     */
    select?: TransactionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParticipant
     */
    omit?: TransactionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionParticipantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    image: 'image',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isActive: 'isActive',
    provider: 'provider'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    joinedAt: 'joinedAt',
    isAdmin: 'isAdmin'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const GroupMemberBalanceScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    owedByMemberId: 'owedByMemberId',
    owedToMemberId: 'owedToMemberId',
    amount: 'amount',
    lastUpdated: 'lastUpdated'
  };

  export type GroupMemberBalanceScalarFieldEnum = (typeof GroupMemberBalanceScalarFieldEnum)[keyof typeof GroupMemberBalanceScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    groupId: 'groupId',
    createdById: 'createdById',
    paidByMemberId: 'paidByMemberId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TransactionParticipantScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    memberId: 'memberId',
    splitAmount: 'splitAmount'
  };

  export type TransactionParticipantScalarFieldEnum = (typeof TransactionParticipantScalarFieldEnum)[keyof typeof TransactionParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    userRoles?: UserRoleListRelationFilter
    groups?: GroupMemberListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    provider?: SortOrder
    userRoles?: UserRoleOrderByRelationAggregateInput
    groups?: GroupMemberOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    userRoles?: UserRoleListRelationFilter
    groups?: GroupMemberListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    provider?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: JsonNullableFilter<"Role">
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    userRoles?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRoles?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: JsonNullableFilter<"Role">
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    userRoles?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    permissions?: JsonNullableWithAggregatesFilter<"Role">
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: IntFilter<"UserRole"> | number
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRole"> | number
    userId?: IntWithAggregatesFilter<"UserRole"> | number
    roleId?: IntWithAggregatesFilter<"UserRole"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    members?: GroupMemberListRelationFilter
    transactions?: TransactionListRelationFilter
    balances?: GroupMemberBalanceListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: GroupMemberOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    balances?: GroupMemberBalanceOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    members?: GroupMemberListRelationFilter
    transactions?: TransactionListRelationFilter
    balances?: GroupMemberBalanceListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringNullableWithAggregatesFilter<"Group"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: IntFilter<"GroupMember"> | number
    groupId?: IntFilter<"GroupMember"> | number
    userId?: IntFilter<"GroupMember"> | number
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    isAdmin?: BoolFilter<"GroupMember"> | boolean
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    owedBalances?: GroupMemberBalanceListRelationFilter
    owingBalances?: GroupMemberBalanceListRelationFilter
    paidTransactions?: TransactionListRelationFilter
    participatedTransactions?: TransactionParticipantListRelationFilter
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    isAdmin?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    owedBalances?: GroupMemberBalanceOrderByRelationAggregateInput
    owingBalances?: GroupMemberBalanceOrderByRelationAggregateInput
    paidTransactions?: TransactionOrderByRelationAggregateInput
    participatedTransactions?: TransactionParticipantOrderByRelationAggregateInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    groupId_userId?: GroupMemberGroupIdUserIdCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: IntFilter<"GroupMember"> | number
    userId?: IntFilter<"GroupMember"> | number
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    isAdmin?: BoolFilter<"GroupMember"> | boolean
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    owedBalances?: GroupMemberBalanceListRelationFilter
    owingBalances?: GroupMemberBalanceListRelationFilter
    paidTransactions?: TransactionListRelationFilter
    participatedTransactions?: TransactionParticipantListRelationFilter
  }, "id" | "groupId_userId">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    isAdmin?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _avg?: GroupMemberAvgOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
    _sum?: GroupMemberSumOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GroupMember"> | number
    groupId?: IntWithAggregatesFilter<"GroupMember"> | number
    userId?: IntWithAggregatesFilter<"GroupMember"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
    isAdmin?: BoolWithAggregatesFilter<"GroupMember"> | boolean
  }

  export type GroupMemberBalanceWhereInput = {
    AND?: GroupMemberBalanceWhereInput | GroupMemberBalanceWhereInput[]
    OR?: GroupMemberBalanceWhereInput[]
    NOT?: GroupMemberBalanceWhereInput | GroupMemberBalanceWhereInput[]
    id?: IntFilter<"GroupMemberBalance"> | number
    groupId?: IntFilter<"GroupMemberBalance"> | number
    owedByMemberId?: IntFilter<"GroupMemberBalance"> | number
    owedToMemberId?: IntFilter<"GroupMemberBalance"> | number
    amount?: DecimalFilter<"GroupMemberBalance"> | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFilter<"GroupMemberBalance"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    owedBy?: XOR<GroupMemberScalarRelationFilter, GroupMemberWhereInput>
    owedTo?: XOR<GroupMemberScalarRelationFilter, GroupMemberWhereInput>
  }

  export type GroupMemberBalanceOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    owedByMemberId?: SortOrder
    owedToMemberId?: SortOrder
    amount?: SortOrder
    lastUpdated?: SortOrder
    group?: GroupOrderByWithRelationInput
    owedBy?: GroupMemberOrderByWithRelationInput
    owedTo?: GroupMemberOrderByWithRelationInput
  }

  export type GroupMemberBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    groupId_owedByMemberId_owedToMemberId?: GroupMemberBalanceGroupIdOwedByMemberIdOwedToMemberIdCompoundUniqueInput
    AND?: GroupMemberBalanceWhereInput | GroupMemberBalanceWhereInput[]
    OR?: GroupMemberBalanceWhereInput[]
    NOT?: GroupMemberBalanceWhereInput | GroupMemberBalanceWhereInput[]
    groupId?: IntFilter<"GroupMemberBalance"> | number
    owedByMemberId?: IntFilter<"GroupMemberBalance"> | number
    owedToMemberId?: IntFilter<"GroupMemberBalance"> | number
    amount?: DecimalFilter<"GroupMemberBalance"> | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFilter<"GroupMemberBalance"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    owedBy?: XOR<GroupMemberScalarRelationFilter, GroupMemberWhereInput>
    owedTo?: XOR<GroupMemberScalarRelationFilter, GroupMemberWhereInput>
  }, "id" | "groupId_owedByMemberId_owedToMemberId">

  export type GroupMemberBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    owedByMemberId?: SortOrder
    owedToMemberId?: SortOrder
    amount?: SortOrder
    lastUpdated?: SortOrder
    _count?: GroupMemberBalanceCountOrderByAggregateInput
    _avg?: GroupMemberBalanceAvgOrderByAggregateInput
    _max?: GroupMemberBalanceMaxOrderByAggregateInput
    _min?: GroupMemberBalanceMinOrderByAggregateInput
    _sum?: GroupMemberBalanceSumOrderByAggregateInput
  }

  export type GroupMemberBalanceScalarWhereWithAggregatesInput = {
    AND?: GroupMemberBalanceScalarWhereWithAggregatesInput | GroupMemberBalanceScalarWhereWithAggregatesInput[]
    OR?: GroupMemberBalanceScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberBalanceScalarWhereWithAggregatesInput | GroupMemberBalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GroupMemberBalance"> | number
    groupId?: IntWithAggregatesFilter<"GroupMemberBalance"> | number
    owedByMemberId?: IntWithAggregatesFilter<"GroupMemberBalance"> | number
    owedToMemberId?: IntWithAggregatesFilter<"GroupMemberBalance"> | number
    amount?: DecimalWithAggregatesFilter<"GroupMemberBalance"> | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeWithAggregatesFilter<"GroupMemberBalance"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    description?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    groupId?: IntFilter<"Transaction"> | number
    createdById?: IntFilter<"Transaction"> | number
    paidByMemberId?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    paidBy?: XOR<GroupMemberScalarRelationFilter, GroupMemberWhereInput>
    participants?: TransactionParticipantListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdById?: SortOrder
    paidByMemberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    paidBy?: GroupMemberOrderByWithRelationInput
    participants?: TransactionParticipantOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    description?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    groupId?: IntFilter<"Transaction"> | number
    createdById?: IntFilter<"Transaction"> | number
    paidByMemberId?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    paidBy?: XOR<GroupMemberScalarRelationFilter, GroupMemberWhereInput>
    participants?: TransactionParticipantListRelationFilter
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdById?: SortOrder
    paidByMemberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    description?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    groupId?: IntWithAggregatesFilter<"Transaction"> | number
    createdById?: IntWithAggregatesFilter<"Transaction"> | number
    paidByMemberId?: IntWithAggregatesFilter<"Transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type TransactionParticipantWhereInput = {
    AND?: TransactionParticipantWhereInput | TransactionParticipantWhereInput[]
    OR?: TransactionParticipantWhereInput[]
    NOT?: TransactionParticipantWhereInput | TransactionParticipantWhereInput[]
    id?: IntFilter<"TransactionParticipant"> | number
    transactionId?: IntFilter<"TransactionParticipant"> | number
    memberId?: IntFilter<"TransactionParticipant"> | number
    splitAmount?: DecimalFilter<"TransactionParticipant"> | Decimal | DecimalJsLike | number | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    member?: XOR<GroupMemberScalarRelationFilter, GroupMemberWhereInput>
  }

  export type TransactionParticipantOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    memberId?: SortOrder
    splitAmount?: SortOrder
    transaction?: TransactionOrderByWithRelationInput
    member?: GroupMemberOrderByWithRelationInput
  }

  export type TransactionParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    transactionId_memberId?: TransactionParticipantTransactionIdMemberIdCompoundUniqueInput
    AND?: TransactionParticipantWhereInput | TransactionParticipantWhereInput[]
    OR?: TransactionParticipantWhereInput[]
    NOT?: TransactionParticipantWhereInput | TransactionParticipantWhereInput[]
    transactionId?: IntFilter<"TransactionParticipant"> | number
    memberId?: IntFilter<"TransactionParticipant"> | number
    splitAmount?: DecimalFilter<"TransactionParticipant"> | Decimal | DecimalJsLike | number | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    member?: XOR<GroupMemberScalarRelationFilter, GroupMemberWhereInput>
  }, "id" | "transactionId_memberId">

  export type TransactionParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    memberId?: SortOrder
    splitAmount?: SortOrder
    _count?: TransactionParticipantCountOrderByAggregateInput
    _avg?: TransactionParticipantAvgOrderByAggregateInput
    _max?: TransactionParticipantMaxOrderByAggregateInput
    _min?: TransactionParticipantMinOrderByAggregateInput
    _sum?: TransactionParticipantSumOrderByAggregateInput
  }

  export type TransactionParticipantScalarWhereWithAggregatesInput = {
    AND?: TransactionParticipantScalarWhereWithAggregatesInput | TransactionParticipantScalarWhereWithAggregatesInput[]
    OR?: TransactionParticipantScalarWhereWithAggregatesInput[]
    NOT?: TransactionParticipantScalarWhereWithAggregatesInput | TransactionParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionParticipant"> | number
    transactionId?: IntWithAggregatesFilter<"TransactionParticipant"> | number
    memberId?: IntWithAggregatesFilter<"TransactionParticipant"> | number
    splitAmount?: DecimalWithAggregatesFilter<"TransactionParticipant"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    provider?: $Enums.Provider
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    provider?: $Enums.Provider
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    provider?: $Enums.Provider
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
  }

  export type RoleCreateInput = {
    name: string
    description?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserRolesInput
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: number
    userId: number
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyInput = {
    id?: number
    userId: number
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    transactions?: TransactionCreateNestedManyWithoutGroupInput
    balances?: GroupMemberBalanceCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutGroupInput
    balances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    transactions?: TransactionUpdateManyWithoutGroupNestedInput
    balances?: GroupMemberBalanceUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutGroupNestedInput
    balances?: GroupMemberBalanceUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    joinedAt?: Date | string
    isAdmin?: boolean
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupsInput
    owedBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedToInput
    owingBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedByInput
    paidTransactions?: TransactionCreateNestedManyWithoutPaidByInput
    participatedTransactions?: TransactionParticipantCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: number
    groupId: number
    userId: number
    joinedAt?: Date | string
    isAdmin?: boolean
    owedBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedToInput
    owingBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedByInput
    paidTransactions?: TransactionUncheckedCreateNestedManyWithoutPaidByInput
    participatedTransactions?: TransactionParticipantUncheckedCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    owedBalances?: GroupMemberBalanceUpdateManyWithoutOwedToNestedInput
    owingBalances?: GroupMemberBalanceUpdateManyWithoutOwedByNestedInput
    paidTransactions?: TransactionUpdateManyWithoutPaidByNestedInput
    participatedTransactions?: TransactionParticipantUpdateManyWithoutMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    owedBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedToNestedInput
    owingBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedByNestedInput
    paidTransactions?: TransactionUncheckedUpdateManyWithoutPaidByNestedInput
    participatedTransactions?: TransactionParticipantUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type GroupMemberCreateManyInput = {
    id?: number
    groupId: number
    userId: number
    joinedAt?: Date | string
    isAdmin?: boolean
  }

  export type GroupMemberUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberBalanceCreateInput = {
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
    group: GroupCreateNestedOneWithoutBalancesInput
    owedBy: GroupMemberCreateNestedOneWithoutOwingBalancesInput
    owedTo: GroupMemberCreateNestedOneWithoutOwedBalancesInput
  }

  export type GroupMemberBalanceUncheckedCreateInput = {
    id?: number
    groupId: number
    owedByMemberId: number
    owedToMemberId: number
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type GroupMemberBalanceUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutBalancesNestedInput
    owedBy?: GroupMemberUpdateOneRequiredWithoutOwingBalancesNestedInput
    owedTo?: GroupMemberUpdateOneRequiredWithoutOwedBalancesNestedInput
  }

  export type GroupMemberBalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    owedByMemberId?: IntFieldUpdateOperationsInput | number
    owedToMemberId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberBalanceCreateManyInput = {
    id?: number
    groupId: number
    owedByMemberId: number
    owedToMemberId: number
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type GroupMemberBalanceUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberBalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    owedByMemberId?: IntFieldUpdateOperationsInput | number
    owedToMemberId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    description: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutTransactionsInput
    createdBy: UserCreateNestedOneWithoutTransactionsInput
    paidBy: GroupMemberCreateNestedOneWithoutPaidTransactionsInput
    participants?: TransactionParticipantCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    description: string
    amount: Decimal | DecimalJsLike | number | string
    groupId: number
    createdById: number
    paidByMemberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: TransactionParticipantUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    paidBy?: GroupMemberUpdateOneRequiredWithoutPaidTransactionsNestedInput
    participants?: TransactionParticipantUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    groupId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    paidByMemberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: TransactionParticipantUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: number
    description: string
    amount: Decimal | DecimalJsLike | number | string
    groupId: number
    createdById: number
    paidByMemberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    groupId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    paidByMemberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionParticipantCreateInput = {
    splitAmount: Decimal | DecimalJsLike | number | string
    transaction: TransactionCreateNestedOneWithoutParticipantsInput
    member: GroupMemberCreateNestedOneWithoutParticipatedTransactionsInput
  }

  export type TransactionParticipantUncheckedCreateInput = {
    id?: number
    transactionId: number
    memberId: number
    splitAmount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionParticipantUpdateInput = {
    splitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction?: TransactionUpdateOneRequiredWithoutParticipantsNestedInput
    member?: GroupMemberUpdateOneRequiredWithoutParticipatedTransactionsNestedInput
  }

  export type TransactionParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    splitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionParticipantCreateManyInput = {
    id?: number
    transactionId: number
    memberId: number
    splitAmount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionParticipantUpdateManyMutationInput = {
    splitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    splitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    provider?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    provider?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    provider?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type GroupMemberBalanceListRelationFilter = {
    every?: GroupMemberBalanceWhereInput
    some?: GroupMemberBalanceWhereInput
    none?: GroupMemberBalanceWhereInput
  }

  export type GroupMemberBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type TransactionParticipantListRelationFilter = {
    every?: TransactionParticipantWhereInput
    some?: TransactionParticipantWhereInput
    none?: TransactionParticipantWhereInput
  }

  export type TransactionParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberGroupIdUserIdCompoundUniqueInput = {
    groupId: number
    userId: number
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type GroupMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type GroupMemberSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type GroupMemberScalarRelationFilter = {
    is?: GroupMemberWhereInput
    isNot?: GroupMemberWhereInput
  }

  export type GroupMemberBalanceGroupIdOwedByMemberIdOwedToMemberIdCompoundUniqueInput = {
    groupId: number
    owedByMemberId: number
    owedToMemberId: number
  }

  export type GroupMemberBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    owedByMemberId?: SortOrder
    owedToMemberId?: SortOrder
    amount?: SortOrder
    lastUpdated?: SortOrder
  }

  export type GroupMemberBalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    owedByMemberId?: SortOrder
    owedToMemberId?: SortOrder
    amount?: SortOrder
  }

  export type GroupMemberBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    owedByMemberId?: SortOrder
    owedToMemberId?: SortOrder
    amount?: SortOrder
    lastUpdated?: SortOrder
  }

  export type GroupMemberBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    owedByMemberId?: SortOrder
    owedToMemberId?: SortOrder
    amount?: SortOrder
    lastUpdated?: SortOrder
  }

  export type GroupMemberBalanceSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    owedByMemberId?: SortOrder
    owedToMemberId?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdById?: SortOrder
    paidByMemberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdById?: SortOrder
    paidByMemberId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdById?: SortOrder
    paidByMemberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdById?: SortOrder
    paidByMemberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdById?: SortOrder
    paidByMemberId?: SortOrder
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type TransactionParticipantTransactionIdMemberIdCompoundUniqueInput = {
    transactionId: number
    memberId: number
  }

  export type TransactionParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    memberId?: SortOrder
    splitAmount?: SortOrder
  }

  export type TransactionParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    memberId?: SortOrder
    splitAmount?: SortOrder
  }

  export type TransactionParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    memberId?: SortOrder
    splitAmount?: SortOrder
  }

  export type TransactionParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    memberId?: SortOrder
    splitAmount?: SortOrder
  }

  export type TransactionParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    memberId?: SortOrder
    splitAmount?: SortOrder
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput> | TransactionCreateWithoutCreatedByInput[] | TransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCreatedByInput | TransactionCreateOrConnectWithoutCreatedByInput[]
    createMany?: TransactionCreateManyCreatedByInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput> | TransactionCreateWithoutCreatedByInput[] | TransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCreatedByInput | TransactionCreateOrConnectWithoutCreatedByInput[]
    createMany?: TransactionCreateManyCreatedByInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput> | TransactionCreateWithoutCreatedByInput[] | TransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCreatedByInput | TransactionCreateOrConnectWithoutCreatedByInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCreatedByInput | TransactionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TransactionCreateManyCreatedByInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCreatedByInput | TransactionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCreatedByInput | TransactionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput> | TransactionCreateWithoutCreatedByInput[] | TransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCreatedByInput | TransactionCreateOrConnectWithoutCreatedByInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCreatedByInput | TransactionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TransactionCreateManyCreatedByInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCreatedByInput | TransactionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCreatedByInput | TransactionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    upsert?: UserUpsertWithoutUserRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRolesInput, UserUpdateWithoutUserRolesInput>, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput
    upsert?: RoleUpsertWithoutUserRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserRolesInput, RoleUpdateWithoutUserRolesInput>, RoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutGroupInput = {
    create?: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput> | TransactionCreateWithoutGroupInput[] | TransactionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGroupInput | TransactionCreateOrConnectWithoutGroupInput[]
    createMany?: TransactionCreateManyGroupInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type GroupMemberBalanceCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutGroupInput, GroupMemberBalanceUncheckedCreateWithoutGroupInput> | GroupMemberBalanceCreateWithoutGroupInput[] | GroupMemberBalanceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutGroupInput | GroupMemberBalanceCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberBalanceCreateManyGroupInputEnvelope
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput> | TransactionCreateWithoutGroupInput[] | TransactionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGroupInput | TransactionCreateOrConnectWithoutGroupInput[]
    createMany?: TransactionCreateManyGroupInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type GroupMemberBalanceUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutGroupInput, GroupMemberBalanceUncheckedCreateWithoutGroupInput> | GroupMemberBalanceCreateWithoutGroupInput[] | GroupMemberBalanceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutGroupInput | GroupMemberBalanceCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberBalanceCreateManyGroupInputEnvelope
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput> | TransactionCreateWithoutGroupInput[] | TransactionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGroupInput | TransactionCreateOrConnectWithoutGroupInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutGroupInput | TransactionUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TransactionCreateManyGroupInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutGroupInput | TransactionUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutGroupInput | TransactionUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type GroupMemberBalanceUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutGroupInput, GroupMemberBalanceUncheckedCreateWithoutGroupInput> | GroupMemberBalanceCreateWithoutGroupInput[] | GroupMemberBalanceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutGroupInput | GroupMemberBalanceCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberBalanceUpsertWithWhereUniqueWithoutGroupInput | GroupMemberBalanceUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberBalanceCreateManyGroupInputEnvelope
    set?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    disconnect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    delete?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    update?: GroupMemberBalanceUpdateWithWhereUniqueWithoutGroupInput | GroupMemberBalanceUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberBalanceUpdateManyWithWhereWithoutGroupInput | GroupMemberBalanceUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberBalanceScalarWhereInput | GroupMemberBalanceScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput> | TransactionCreateWithoutGroupInput[] | TransactionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGroupInput | TransactionCreateOrConnectWithoutGroupInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutGroupInput | TransactionUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TransactionCreateManyGroupInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutGroupInput | TransactionUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutGroupInput | TransactionUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type GroupMemberBalanceUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutGroupInput, GroupMemberBalanceUncheckedCreateWithoutGroupInput> | GroupMemberBalanceCreateWithoutGroupInput[] | GroupMemberBalanceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutGroupInput | GroupMemberBalanceCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberBalanceUpsertWithWhereUniqueWithoutGroupInput | GroupMemberBalanceUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberBalanceCreateManyGroupInputEnvelope
    set?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    disconnect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    delete?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    update?: GroupMemberBalanceUpdateWithWhereUniqueWithoutGroupInput | GroupMemberBalanceUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberBalanceUpdateManyWithWhereWithoutGroupInput | GroupMemberBalanceUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberBalanceScalarWhereInput | GroupMemberBalanceScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMemberBalanceCreateNestedManyWithoutOwedToInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutOwedToInput, GroupMemberBalanceUncheckedCreateWithoutOwedToInput> | GroupMemberBalanceCreateWithoutOwedToInput[] | GroupMemberBalanceUncheckedCreateWithoutOwedToInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutOwedToInput | GroupMemberBalanceCreateOrConnectWithoutOwedToInput[]
    createMany?: GroupMemberBalanceCreateManyOwedToInputEnvelope
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
  }

  export type GroupMemberBalanceCreateNestedManyWithoutOwedByInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutOwedByInput, GroupMemberBalanceUncheckedCreateWithoutOwedByInput> | GroupMemberBalanceCreateWithoutOwedByInput[] | GroupMemberBalanceUncheckedCreateWithoutOwedByInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutOwedByInput | GroupMemberBalanceCreateOrConnectWithoutOwedByInput[]
    createMany?: GroupMemberBalanceCreateManyOwedByInputEnvelope
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutPaidByInput = {
    create?: XOR<TransactionCreateWithoutPaidByInput, TransactionUncheckedCreateWithoutPaidByInput> | TransactionCreateWithoutPaidByInput[] | TransactionUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaidByInput | TransactionCreateOrConnectWithoutPaidByInput[]
    createMany?: TransactionCreateManyPaidByInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionParticipantCreateNestedManyWithoutMemberInput = {
    create?: XOR<TransactionParticipantCreateWithoutMemberInput, TransactionParticipantUncheckedCreateWithoutMemberInput> | TransactionParticipantCreateWithoutMemberInput[] | TransactionParticipantUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TransactionParticipantCreateOrConnectWithoutMemberInput | TransactionParticipantCreateOrConnectWithoutMemberInput[]
    createMany?: TransactionParticipantCreateManyMemberInputEnvelope
    connect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
  }

  export type GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedToInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutOwedToInput, GroupMemberBalanceUncheckedCreateWithoutOwedToInput> | GroupMemberBalanceCreateWithoutOwedToInput[] | GroupMemberBalanceUncheckedCreateWithoutOwedToInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutOwedToInput | GroupMemberBalanceCreateOrConnectWithoutOwedToInput[]
    createMany?: GroupMemberBalanceCreateManyOwedToInputEnvelope
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
  }

  export type GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedByInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutOwedByInput, GroupMemberBalanceUncheckedCreateWithoutOwedByInput> | GroupMemberBalanceCreateWithoutOwedByInput[] | GroupMemberBalanceUncheckedCreateWithoutOwedByInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutOwedByInput | GroupMemberBalanceCreateOrConnectWithoutOwedByInput[]
    createMany?: GroupMemberBalanceCreateManyOwedByInputEnvelope
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPaidByInput = {
    create?: XOR<TransactionCreateWithoutPaidByInput, TransactionUncheckedCreateWithoutPaidByInput> | TransactionCreateWithoutPaidByInput[] | TransactionUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaidByInput | TransactionCreateOrConnectWithoutPaidByInput[]
    createMany?: TransactionCreateManyPaidByInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionParticipantUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<TransactionParticipantCreateWithoutMemberInput, TransactionParticipantUncheckedCreateWithoutMemberInput> | TransactionParticipantCreateWithoutMemberInput[] | TransactionParticipantUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TransactionParticipantCreateOrConnectWithoutMemberInput | TransactionParticipantCreateOrConnectWithoutMemberInput[]
    createMany?: TransactionParticipantCreateManyMemberInputEnvelope
    connect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    upsert?: UserUpsertWithoutGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupsInput, UserUpdateWithoutGroupsInput>, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupMemberBalanceUpdateManyWithoutOwedToNestedInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutOwedToInput, GroupMemberBalanceUncheckedCreateWithoutOwedToInput> | GroupMemberBalanceCreateWithoutOwedToInput[] | GroupMemberBalanceUncheckedCreateWithoutOwedToInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutOwedToInput | GroupMemberBalanceCreateOrConnectWithoutOwedToInput[]
    upsert?: GroupMemberBalanceUpsertWithWhereUniqueWithoutOwedToInput | GroupMemberBalanceUpsertWithWhereUniqueWithoutOwedToInput[]
    createMany?: GroupMemberBalanceCreateManyOwedToInputEnvelope
    set?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    disconnect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    delete?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    update?: GroupMemberBalanceUpdateWithWhereUniqueWithoutOwedToInput | GroupMemberBalanceUpdateWithWhereUniqueWithoutOwedToInput[]
    updateMany?: GroupMemberBalanceUpdateManyWithWhereWithoutOwedToInput | GroupMemberBalanceUpdateManyWithWhereWithoutOwedToInput[]
    deleteMany?: GroupMemberBalanceScalarWhereInput | GroupMemberBalanceScalarWhereInput[]
  }

  export type GroupMemberBalanceUpdateManyWithoutOwedByNestedInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutOwedByInput, GroupMemberBalanceUncheckedCreateWithoutOwedByInput> | GroupMemberBalanceCreateWithoutOwedByInput[] | GroupMemberBalanceUncheckedCreateWithoutOwedByInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutOwedByInput | GroupMemberBalanceCreateOrConnectWithoutOwedByInput[]
    upsert?: GroupMemberBalanceUpsertWithWhereUniqueWithoutOwedByInput | GroupMemberBalanceUpsertWithWhereUniqueWithoutOwedByInput[]
    createMany?: GroupMemberBalanceCreateManyOwedByInputEnvelope
    set?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    disconnect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    delete?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    update?: GroupMemberBalanceUpdateWithWhereUniqueWithoutOwedByInput | GroupMemberBalanceUpdateWithWhereUniqueWithoutOwedByInput[]
    updateMany?: GroupMemberBalanceUpdateManyWithWhereWithoutOwedByInput | GroupMemberBalanceUpdateManyWithWhereWithoutOwedByInput[]
    deleteMany?: GroupMemberBalanceScalarWhereInput | GroupMemberBalanceScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutPaidByNestedInput = {
    create?: XOR<TransactionCreateWithoutPaidByInput, TransactionUncheckedCreateWithoutPaidByInput> | TransactionCreateWithoutPaidByInput[] | TransactionUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaidByInput | TransactionCreateOrConnectWithoutPaidByInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPaidByInput | TransactionUpsertWithWhereUniqueWithoutPaidByInput[]
    createMany?: TransactionCreateManyPaidByInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPaidByInput | TransactionUpdateWithWhereUniqueWithoutPaidByInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPaidByInput | TransactionUpdateManyWithWhereWithoutPaidByInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionParticipantUpdateManyWithoutMemberNestedInput = {
    create?: XOR<TransactionParticipantCreateWithoutMemberInput, TransactionParticipantUncheckedCreateWithoutMemberInput> | TransactionParticipantCreateWithoutMemberInput[] | TransactionParticipantUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TransactionParticipantCreateOrConnectWithoutMemberInput | TransactionParticipantCreateOrConnectWithoutMemberInput[]
    upsert?: TransactionParticipantUpsertWithWhereUniqueWithoutMemberInput | TransactionParticipantUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: TransactionParticipantCreateManyMemberInputEnvelope
    set?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    disconnect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    delete?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    connect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    update?: TransactionParticipantUpdateWithWhereUniqueWithoutMemberInput | TransactionParticipantUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: TransactionParticipantUpdateManyWithWhereWithoutMemberInput | TransactionParticipantUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: TransactionParticipantScalarWhereInput | TransactionParticipantScalarWhereInput[]
  }

  export type GroupMemberBalanceUncheckedUpdateManyWithoutOwedToNestedInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutOwedToInput, GroupMemberBalanceUncheckedCreateWithoutOwedToInput> | GroupMemberBalanceCreateWithoutOwedToInput[] | GroupMemberBalanceUncheckedCreateWithoutOwedToInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutOwedToInput | GroupMemberBalanceCreateOrConnectWithoutOwedToInput[]
    upsert?: GroupMemberBalanceUpsertWithWhereUniqueWithoutOwedToInput | GroupMemberBalanceUpsertWithWhereUniqueWithoutOwedToInput[]
    createMany?: GroupMemberBalanceCreateManyOwedToInputEnvelope
    set?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    disconnect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    delete?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    update?: GroupMemberBalanceUpdateWithWhereUniqueWithoutOwedToInput | GroupMemberBalanceUpdateWithWhereUniqueWithoutOwedToInput[]
    updateMany?: GroupMemberBalanceUpdateManyWithWhereWithoutOwedToInput | GroupMemberBalanceUpdateManyWithWhereWithoutOwedToInput[]
    deleteMany?: GroupMemberBalanceScalarWhereInput | GroupMemberBalanceScalarWhereInput[]
  }

  export type GroupMemberBalanceUncheckedUpdateManyWithoutOwedByNestedInput = {
    create?: XOR<GroupMemberBalanceCreateWithoutOwedByInput, GroupMemberBalanceUncheckedCreateWithoutOwedByInput> | GroupMemberBalanceCreateWithoutOwedByInput[] | GroupMemberBalanceUncheckedCreateWithoutOwedByInput[]
    connectOrCreate?: GroupMemberBalanceCreateOrConnectWithoutOwedByInput | GroupMemberBalanceCreateOrConnectWithoutOwedByInput[]
    upsert?: GroupMemberBalanceUpsertWithWhereUniqueWithoutOwedByInput | GroupMemberBalanceUpsertWithWhereUniqueWithoutOwedByInput[]
    createMany?: GroupMemberBalanceCreateManyOwedByInputEnvelope
    set?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    disconnect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    delete?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    connect?: GroupMemberBalanceWhereUniqueInput | GroupMemberBalanceWhereUniqueInput[]
    update?: GroupMemberBalanceUpdateWithWhereUniqueWithoutOwedByInput | GroupMemberBalanceUpdateWithWhereUniqueWithoutOwedByInput[]
    updateMany?: GroupMemberBalanceUpdateManyWithWhereWithoutOwedByInput | GroupMemberBalanceUpdateManyWithWhereWithoutOwedByInput[]
    deleteMany?: GroupMemberBalanceScalarWhereInput | GroupMemberBalanceScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPaidByNestedInput = {
    create?: XOR<TransactionCreateWithoutPaidByInput, TransactionUncheckedCreateWithoutPaidByInput> | TransactionCreateWithoutPaidByInput[] | TransactionUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaidByInput | TransactionCreateOrConnectWithoutPaidByInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPaidByInput | TransactionUpsertWithWhereUniqueWithoutPaidByInput[]
    createMany?: TransactionCreateManyPaidByInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPaidByInput | TransactionUpdateWithWhereUniqueWithoutPaidByInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPaidByInput | TransactionUpdateManyWithWhereWithoutPaidByInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionParticipantUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<TransactionParticipantCreateWithoutMemberInput, TransactionParticipantUncheckedCreateWithoutMemberInput> | TransactionParticipantCreateWithoutMemberInput[] | TransactionParticipantUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TransactionParticipantCreateOrConnectWithoutMemberInput | TransactionParticipantCreateOrConnectWithoutMemberInput[]
    upsert?: TransactionParticipantUpsertWithWhereUniqueWithoutMemberInput | TransactionParticipantUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: TransactionParticipantCreateManyMemberInputEnvelope
    set?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    disconnect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    delete?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    connect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    update?: TransactionParticipantUpdateWithWhereUniqueWithoutMemberInput | TransactionParticipantUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: TransactionParticipantUpdateManyWithWhereWithoutMemberInput | TransactionParticipantUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: TransactionParticipantScalarWhereInput | TransactionParticipantScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutBalancesInput = {
    create?: XOR<GroupCreateWithoutBalancesInput, GroupUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutBalancesInput
    connect?: GroupWhereUniqueInput
  }

  export type GroupMemberCreateNestedOneWithoutOwingBalancesInput = {
    create?: XOR<GroupMemberCreateWithoutOwingBalancesInput, GroupMemberUncheckedCreateWithoutOwingBalancesInput>
    connectOrCreate?: GroupMemberCreateOrConnectWithoutOwingBalancesInput
    connect?: GroupMemberWhereUniqueInput
  }

  export type GroupMemberCreateNestedOneWithoutOwedBalancesInput = {
    create?: XOR<GroupMemberCreateWithoutOwedBalancesInput, GroupMemberUncheckedCreateWithoutOwedBalancesInput>
    connectOrCreate?: GroupMemberCreateOrConnectWithoutOwedBalancesInput
    connect?: GroupMemberWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type GroupUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<GroupCreateWithoutBalancesInput, GroupUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutBalancesInput
    upsert?: GroupUpsertWithoutBalancesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutBalancesInput, GroupUpdateWithoutBalancesInput>, GroupUncheckedUpdateWithoutBalancesInput>
  }

  export type GroupMemberUpdateOneRequiredWithoutOwingBalancesNestedInput = {
    create?: XOR<GroupMemberCreateWithoutOwingBalancesInput, GroupMemberUncheckedCreateWithoutOwingBalancesInput>
    connectOrCreate?: GroupMemberCreateOrConnectWithoutOwingBalancesInput
    upsert?: GroupMemberUpsertWithoutOwingBalancesInput
    connect?: GroupMemberWhereUniqueInput
    update?: XOR<XOR<GroupMemberUpdateToOneWithWhereWithoutOwingBalancesInput, GroupMemberUpdateWithoutOwingBalancesInput>, GroupMemberUncheckedUpdateWithoutOwingBalancesInput>
  }

  export type GroupMemberUpdateOneRequiredWithoutOwedBalancesNestedInput = {
    create?: XOR<GroupMemberCreateWithoutOwedBalancesInput, GroupMemberUncheckedCreateWithoutOwedBalancesInput>
    connectOrCreate?: GroupMemberCreateOrConnectWithoutOwedBalancesInput
    upsert?: GroupMemberUpsertWithoutOwedBalancesInput
    connect?: GroupMemberWhereUniqueInput
    update?: XOR<XOR<GroupMemberUpdateToOneWithWhereWithoutOwedBalancesInput, GroupMemberUpdateWithoutOwedBalancesInput>, GroupMemberUncheckedUpdateWithoutOwedBalancesInput>
  }

  export type GroupCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<GroupCreateWithoutTransactionsInput, GroupUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTransactionsInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMemberCreateNestedOneWithoutPaidTransactionsInput = {
    create?: XOR<GroupMemberCreateWithoutPaidTransactionsInput, GroupMemberUncheckedCreateWithoutPaidTransactionsInput>
    connectOrCreate?: GroupMemberCreateOrConnectWithoutPaidTransactionsInput
    connect?: GroupMemberWhereUniqueInput
  }

  export type TransactionParticipantCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionParticipantCreateWithoutTransactionInput, TransactionParticipantUncheckedCreateWithoutTransactionInput> | TransactionParticipantCreateWithoutTransactionInput[] | TransactionParticipantUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionParticipantCreateOrConnectWithoutTransactionInput | TransactionParticipantCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionParticipantCreateManyTransactionInputEnvelope
    connect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
  }

  export type TransactionParticipantUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionParticipantCreateWithoutTransactionInput, TransactionParticipantUncheckedCreateWithoutTransactionInput> | TransactionParticipantCreateWithoutTransactionInput[] | TransactionParticipantUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionParticipantCreateOrConnectWithoutTransactionInput | TransactionParticipantCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionParticipantCreateManyTransactionInputEnvelope
    connect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
  }

  export type GroupUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<GroupCreateWithoutTransactionsInput, GroupUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTransactionsInput
    upsert?: GroupUpsertWithoutTransactionsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutTransactionsInput, GroupUpdateWithoutTransactionsInput>, GroupUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type GroupMemberUpdateOneRequiredWithoutPaidTransactionsNestedInput = {
    create?: XOR<GroupMemberCreateWithoutPaidTransactionsInput, GroupMemberUncheckedCreateWithoutPaidTransactionsInput>
    connectOrCreate?: GroupMemberCreateOrConnectWithoutPaidTransactionsInput
    upsert?: GroupMemberUpsertWithoutPaidTransactionsInput
    connect?: GroupMemberWhereUniqueInput
    update?: XOR<XOR<GroupMemberUpdateToOneWithWhereWithoutPaidTransactionsInput, GroupMemberUpdateWithoutPaidTransactionsInput>, GroupMemberUncheckedUpdateWithoutPaidTransactionsInput>
  }

  export type TransactionParticipantUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionParticipantCreateWithoutTransactionInput, TransactionParticipantUncheckedCreateWithoutTransactionInput> | TransactionParticipantCreateWithoutTransactionInput[] | TransactionParticipantUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionParticipantCreateOrConnectWithoutTransactionInput | TransactionParticipantCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionParticipantUpsertWithWhereUniqueWithoutTransactionInput | TransactionParticipantUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionParticipantCreateManyTransactionInputEnvelope
    set?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    disconnect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    delete?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    connect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    update?: TransactionParticipantUpdateWithWhereUniqueWithoutTransactionInput | TransactionParticipantUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionParticipantUpdateManyWithWhereWithoutTransactionInput | TransactionParticipantUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionParticipantScalarWhereInput | TransactionParticipantScalarWhereInput[]
  }

  export type TransactionParticipantUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionParticipantCreateWithoutTransactionInput, TransactionParticipantUncheckedCreateWithoutTransactionInput> | TransactionParticipantCreateWithoutTransactionInput[] | TransactionParticipantUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionParticipantCreateOrConnectWithoutTransactionInput | TransactionParticipantCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionParticipantUpsertWithWhereUniqueWithoutTransactionInput | TransactionParticipantUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionParticipantCreateManyTransactionInputEnvelope
    set?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    disconnect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    delete?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    connect?: TransactionParticipantWhereUniqueInput | TransactionParticipantWhereUniqueInput[]
    update?: TransactionParticipantUpdateWithWhereUniqueWithoutTransactionInput | TransactionParticipantUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionParticipantUpdateManyWithWhereWithoutTransactionInput | TransactionParticipantUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionParticipantScalarWhereInput | TransactionParticipantScalarWhereInput[]
  }

  export type TransactionCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<TransactionCreateWithoutParticipantsInput, TransactionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutParticipantsInput
    connect?: TransactionWhereUniqueInput
  }

  export type GroupMemberCreateNestedOneWithoutParticipatedTransactionsInput = {
    create?: XOR<GroupMemberCreateWithoutParticipatedTransactionsInput, GroupMemberUncheckedCreateWithoutParticipatedTransactionsInput>
    connectOrCreate?: GroupMemberCreateOrConnectWithoutParticipatedTransactionsInput
    connect?: GroupMemberWhereUniqueInput
  }

  export type TransactionUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<TransactionCreateWithoutParticipantsInput, TransactionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutParticipantsInput
    upsert?: TransactionUpsertWithoutParticipantsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutParticipantsInput, TransactionUpdateWithoutParticipantsInput>, TransactionUncheckedUpdateWithoutParticipantsInput>
  }

  export type GroupMemberUpdateOneRequiredWithoutParticipatedTransactionsNestedInput = {
    create?: XOR<GroupMemberCreateWithoutParticipatedTransactionsInput, GroupMemberUncheckedCreateWithoutParticipatedTransactionsInput>
    connectOrCreate?: GroupMemberCreateOrConnectWithoutParticipatedTransactionsInput
    upsert?: GroupMemberUpsertWithoutParticipatedTransactionsInput
    connect?: GroupMemberWhereUniqueInput
    update?: XOR<XOR<GroupMemberUpdateToOneWithWhereWithoutParticipatedTransactionsInput, GroupMemberUpdateWithoutParticipatedTransactionsInput>, GroupMemberUncheckedUpdateWithoutParticipatedTransactionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserRoleCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    id?: number
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutUserInput = {
    joinedAt?: Date | string
    isAdmin?: boolean
    group: GroupCreateNestedOneWithoutMembersInput
    owedBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedToInput
    owingBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedByInput
    paidTransactions?: TransactionCreateNestedManyWithoutPaidByInput
    participatedTransactions?: TransactionParticipantCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: number
    groupId: number
    joinedAt?: Date | string
    isAdmin?: boolean
    owedBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedToInput
    owingBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedByInput
    paidTransactions?: TransactionUncheckedCreateNestedManyWithoutPaidByInput
    participatedTransactions?: TransactionParticipantUncheckedCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutCreatedByInput = {
    description: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutTransactionsInput
    paidBy: GroupMemberCreateNestedOneWithoutPaidTransactionsInput
    participants?: TransactionParticipantCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCreatedByInput = {
    id?: number
    description: string
    amount: Decimal | DecimalJsLike | number | string
    groupId: number
    paidByMemberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: TransactionParticipantUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCreatedByInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput>
  }

  export type TransactionCreateManyCreatedByInputEnvelope = {
    data: TransactionCreateManyCreatedByInput | TransactionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    id?: IntFilter<"UserRole"> | number
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: IntFilter<"GroupMember"> | number
    groupId?: IntFilter<"GroupMember"> | number
    userId?: IntFilter<"GroupMember"> | number
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    isAdmin?: BoolFilter<"GroupMember"> | boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCreatedByInput, TransactionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCreatedByInput, TransactionUncheckedUpdateWithoutCreatedByInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCreatedByInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    description?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    groupId?: IntFilter<"Transaction"> | number
    createdById?: IntFilter<"Transaction"> | number
    paidByMemberId?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutUserRolesInput = {
    email: string
    name?: string | null
    password?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    provider?: $Enums.Provider
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutUserRolesInput = {
    id?: number
    email: string
    name?: string | null
    password?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    provider?: $Enums.Provider
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutUserRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
  }

  export type RoleCreateWithoutUserRolesInput = {
    name: string
    description?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUserRolesInput = {
    id?: number
    name: string
    description?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUserRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
  }

  export type UserUpsertWithoutUserRolesInput = {
    update: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type UserUpdateWithoutUserRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type RoleUpsertWithoutUserRolesInput = {
    update: XOR<RoleUpdateWithoutUserRolesInput, RoleUncheckedUpdateWithoutUserRolesInput>
    create: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserRolesInput, RoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateWithoutUserRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUserRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateWithoutGroupInput = {
    joinedAt?: Date | string
    isAdmin?: boolean
    user: UserCreateNestedOneWithoutGroupsInput
    owedBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedToInput
    owingBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedByInput
    paidTransactions?: TransactionCreateNestedManyWithoutPaidByInput
    participatedTransactions?: TransactionParticipantCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
    isAdmin?: boolean
    owedBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedToInput
    owingBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedByInput
    paidTransactions?: TransactionUncheckedCreateNestedManyWithoutPaidByInput
    participatedTransactions?: TransactionParticipantUncheckedCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutGroupInput = {
    description: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutTransactionsInput
    paidBy: GroupMemberCreateNestedOneWithoutPaidTransactionsInput
    participants?: TransactionParticipantCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutGroupInput = {
    id?: number
    description: string
    amount: Decimal | DecimalJsLike | number | string
    createdById: number
    paidByMemberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: TransactionParticipantUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutGroupInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput>
  }

  export type TransactionCreateManyGroupInputEnvelope = {
    data: TransactionCreateManyGroupInput | TransactionCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberBalanceCreateWithoutGroupInput = {
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
    owedBy: GroupMemberCreateNestedOneWithoutOwingBalancesInput
    owedTo: GroupMemberCreateNestedOneWithoutOwedBalancesInput
  }

  export type GroupMemberBalanceUncheckedCreateWithoutGroupInput = {
    id?: number
    owedByMemberId: number
    owedToMemberId: number
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type GroupMemberBalanceCreateOrConnectWithoutGroupInput = {
    where: GroupMemberBalanceWhereUniqueInput
    create: XOR<GroupMemberBalanceCreateWithoutGroupInput, GroupMemberBalanceUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberBalanceCreateManyGroupInputEnvelope = {
    data: GroupMemberBalanceCreateManyGroupInput | GroupMemberBalanceCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutGroupInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutGroupInput, TransactionUncheckedUpdateWithoutGroupInput>
    create: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutGroupInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutGroupInput, TransactionUncheckedUpdateWithoutGroupInput>
  }

  export type TransactionUpdateManyWithWhereWithoutGroupInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupMemberBalanceUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberBalanceWhereUniqueInput
    update: XOR<GroupMemberBalanceUpdateWithoutGroupInput, GroupMemberBalanceUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberBalanceCreateWithoutGroupInput, GroupMemberBalanceUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberBalanceUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberBalanceWhereUniqueInput
    data: XOR<GroupMemberBalanceUpdateWithoutGroupInput, GroupMemberBalanceUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberBalanceUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberBalanceScalarWhereInput
    data: XOR<GroupMemberBalanceUpdateManyMutationInput, GroupMemberBalanceUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupMemberBalanceScalarWhereInput = {
    AND?: GroupMemberBalanceScalarWhereInput | GroupMemberBalanceScalarWhereInput[]
    OR?: GroupMemberBalanceScalarWhereInput[]
    NOT?: GroupMemberBalanceScalarWhereInput | GroupMemberBalanceScalarWhereInput[]
    id?: IntFilter<"GroupMemberBalance"> | number
    groupId?: IntFilter<"GroupMemberBalance"> | number
    owedByMemberId?: IntFilter<"GroupMemberBalance"> | number
    owedToMemberId?: IntFilter<"GroupMemberBalance"> | number
    amount?: DecimalFilter<"GroupMemberBalance"> | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFilter<"GroupMemberBalance"> | Date | string
  }

  export type GroupCreateWithoutMembersInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutGroupInput
    balances?: GroupMemberBalanceCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutGroupInput
    balances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutGroupsInput = {
    email: string
    name?: string | null
    password?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    provider?: $Enums.Provider
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: number
    email: string
    name?: string | null
    password?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    provider?: $Enums.Provider
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type GroupMemberBalanceCreateWithoutOwedToInput = {
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
    group: GroupCreateNestedOneWithoutBalancesInput
    owedBy: GroupMemberCreateNestedOneWithoutOwingBalancesInput
  }

  export type GroupMemberBalanceUncheckedCreateWithoutOwedToInput = {
    id?: number
    groupId: number
    owedByMemberId: number
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type GroupMemberBalanceCreateOrConnectWithoutOwedToInput = {
    where: GroupMemberBalanceWhereUniqueInput
    create: XOR<GroupMemberBalanceCreateWithoutOwedToInput, GroupMemberBalanceUncheckedCreateWithoutOwedToInput>
  }

  export type GroupMemberBalanceCreateManyOwedToInputEnvelope = {
    data: GroupMemberBalanceCreateManyOwedToInput | GroupMemberBalanceCreateManyOwedToInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberBalanceCreateWithoutOwedByInput = {
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
    group: GroupCreateNestedOneWithoutBalancesInput
    owedTo: GroupMemberCreateNestedOneWithoutOwedBalancesInput
  }

  export type GroupMemberBalanceUncheckedCreateWithoutOwedByInput = {
    id?: number
    groupId: number
    owedToMemberId: number
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type GroupMemberBalanceCreateOrConnectWithoutOwedByInput = {
    where: GroupMemberBalanceWhereUniqueInput
    create: XOR<GroupMemberBalanceCreateWithoutOwedByInput, GroupMemberBalanceUncheckedCreateWithoutOwedByInput>
  }

  export type GroupMemberBalanceCreateManyOwedByInputEnvelope = {
    data: GroupMemberBalanceCreateManyOwedByInput | GroupMemberBalanceCreateManyOwedByInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutPaidByInput = {
    description: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutTransactionsInput
    createdBy: UserCreateNestedOneWithoutTransactionsInput
    participants?: TransactionParticipantCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutPaidByInput = {
    id?: number
    description: string
    amount: Decimal | DecimalJsLike | number | string
    groupId: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: TransactionParticipantUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPaidByInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPaidByInput, TransactionUncheckedCreateWithoutPaidByInput>
  }

  export type TransactionCreateManyPaidByInputEnvelope = {
    data: TransactionCreateManyPaidByInput | TransactionCreateManyPaidByInput[]
    skipDuplicates?: boolean
  }

  export type TransactionParticipantCreateWithoutMemberInput = {
    splitAmount: Decimal | DecimalJsLike | number | string
    transaction: TransactionCreateNestedOneWithoutParticipantsInput
  }

  export type TransactionParticipantUncheckedCreateWithoutMemberInput = {
    id?: number
    transactionId: number
    splitAmount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionParticipantCreateOrConnectWithoutMemberInput = {
    where: TransactionParticipantWhereUniqueInput
    create: XOR<TransactionParticipantCreateWithoutMemberInput, TransactionParticipantUncheckedCreateWithoutMemberInput>
  }

  export type TransactionParticipantCreateManyMemberInputEnvelope = {
    data: TransactionParticipantCreateManyMemberInput | TransactionParticipantCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutGroupNestedInput
    balances?: GroupMemberBalanceUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutGroupNestedInput
    balances?: GroupMemberBalanceUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutGroupsInput = {
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateWithoutGroupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type GroupMemberBalanceUpsertWithWhereUniqueWithoutOwedToInput = {
    where: GroupMemberBalanceWhereUniqueInput
    update: XOR<GroupMemberBalanceUpdateWithoutOwedToInput, GroupMemberBalanceUncheckedUpdateWithoutOwedToInput>
    create: XOR<GroupMemberBalanceCreateWithoutOwedToInput, GroupMemberBalanceUncheckedCreateWithoutOwedToInput>
  }

  export type GroupMemberBalanceUpdateWithWhereUniqueWithoutOwedToInput = {
    where: GroupMemberBalanceWhereUniqueInput
    data: XOR<GroupMemberBalanceUpdateWithoutOwedToInput, GroupMemberBalanceUncheckedUpdateWithoutOwedToInput>
  }

  export type GroupMemberBalanceUpdateManyWithWhereWithoutOwedToInput = {
    where: GroupMemberBalanceScalarWhereInput
    data: XOR<GroupMemberBalanceUpdateManyMutationInput, GroupMemberBalanceUncheckedUpdateManyWithoutOwedToInput>
  }

  export type GroupMemberBalanceUpsertWithWhereUniqueWithoutOwedByInput = {
    where: GroupMemberBalanceWhereUniqueInput
    update: XOR<GroupMemberBalanceUpdateWithoutOwedByInput, GroupMemberBalanceUncheckedUpdateWithoutOwedByInput>
    create: XOR<GroupMemberBalanceCreateWithoutOwedByInput, GroupMemberBalanceUncheckedCreateWithoutOwedByInput>
  }

  export type GroupMemberBalanceUpdateWithWhereUniqueWithoutOwedByInput = {
    where: GroupMemberBalanceWhereUniqueInput
    data: XOR<GroupMemberBalanceUpdateWithoutOwedByInput, GroupMemberBalanceUncheckedUpdateWithoutOwedByInput>
  }

  export type GroupMemberBalanceUpdateManyWithWhereWithoutOwedByInput = {
    where: GroupMemberBalanceScalarWhereInput
    data: XOR<GroupMemberBalanceUpdateManyMutationInput, GroupMemberBalanceUncheckedUpdateManyWithoutOwedByInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutPaidByInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPaidByInput, TransactionUncheckedUpdateWithoutPaidByInput>
    create: XOR<TransactionCreateWithoutPaidByInput, TransactionUncheckedCreateWithoutPaidByInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPaidByInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPaidByInput, TransactionUncheckedUpdateWithoutPaidByInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPaidByInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPaidByInput>
  }

  export type TransactionParticipantUpsertWithWhereUniqueWithoutMemberInput = {
    where: TransactionParticipantWhereUniqueInput
    update: XOR<TransactionParticipantUpdateWithoutMemberInput, TransactionParticipantUncheckedUpdateWithoutMemberInput>
    create: XOR<TransactionParticipantCreateWithoutMemberInput, TransactionParticipantUncheckedCreateWithoutMemberInput>
  }

  export type TransactionParticipantUpdateWithWhereUniqueWithoutMemberInput = {
    where: TransactionParticipantWhereUniqueInput
    data: XOR<TransactionParticipantUpdateWithoutMemberInput, TransactionParticipantUncheckedUpdateWithoutMemberInput>
  }

  export type TransactionParticipantUpdateManyWithWhereWithoutMemberInput = {
    where: TransactionParticipantScalarWhereInput
    data: XOR<TransactionParticipantUpdateManyMutationInput, TransactionParticipantUncheckedUpdateManyWithoutMemberInput>
  }

  export type TransactionParticipantScalarWhereInput = {
    AND?: TransactionParticipantScalarWhereInput | TransactionParticipantScalarWhereInput[]
    OR?: TransactionParticipantScalarWhereInput[]
    NOT?: TransactionParticipantScalarWhereInput | TransactionParticipantScalarWhereInput[]
    id?: IntFilter<"TransactionParticipant"> | number
    transactionId?: IntFilter<"TransactionParticipant"> | number
    memberId?: IntFilter<"TransactionParticipant"> | number
    splitAmount?: DecimalFilter<"TransactionParticipant"> | Decimal | DecimalJsLike | number | string
  }

  export type GroupCreateWithoutBalancesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    transactions?: TransactionCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutBalancesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutBalancesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutBalancesInput, GroupUncheckedCreateWithoutBalancesInput>
  }

  export type GroupMemberCreateWithoutOwingBalancesInput = {
    joinedAt?: Date | string
    isAdmin?: boolean
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupsInput
    owedBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedToInput
    paidTransactions?: TransactionCreateNestedManyWithoutPaidByInput
    participatedTransactions?: TransactionParticipantCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberUncheckedCreateWithoutOwingBalancesInput = {
    id?: number
    groupId: number
    userId: number
    joinedAt?: Date | string
    isAdmin?: boolean
    owedBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedToInput
    paidTransactions?: TransactionUncheckedCreateNestedManyWithoutPaidByInput
    participatedTransactions?: TransactionParticipantUncheckedCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberCreateOrConnectWithoutOwingBalancesInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutOwingBalancesInput, GroupMemberUncheckedCreateWithoutOwingBalancesInput>
  }

  export type GroupMemberCreateWithoutOwedBalancesInput = {
    joinedAt?: Date | string
    isAdmin?: boolean
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupsInput
    owingBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedByInput
    paidTransactions?: TransactionCreateNestedManyWithoutPaidByInput
    participatedTransactions?: TransactionParticipantCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberUncheckedCreateWithoutOwedBalancesInput = {
    id?: number
    groupId: number
    userId: number
    joinedAt?: Date | string
    isAdmin?: boolean
    owingBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedByInput
    paidTransactions?: TransactionUncheckedCreateNestedManyWithoutPaidByInput
    participatedTransactions?: TransactionParticipantUncheckedCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberCreateOrConnectWithoutOwedBalancesInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutOwedBalancesInput, GroupMemberUncheckedCreateWithoutOwedBalancesInput>
  }

  export type GroupUpsertWithoutBalancesInput = {
    update: XOR<GroupUpdateWithoutBalancesInput, GroupUncheckedUpdateWithoutBalancesInput>
    create: XOR<GroupCreateWithoutBalancesInput, GroupUncheckedCreateWithoutBalancesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutBalancesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutBalancesInput, GroupUncheckedUpdateWithoutBalancesInput>
  }

  export type GroupUpdateWithoutBalancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    transactions?: TransactionUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupMemberUpsertWithoutOwingBalancesInput = {
    update: XOR<GroupMemberUpdateWithoutOwingBalancesInput, GroupMemberUncheckedUpdateWithoutOwingBalancesInput>
    create: XOR<GroupMemberCreateWithoutOwingBalancesInput, GroupMemberUncheckedCreateWithoutOwingBalancesInput>
    where?: GroupMemberWhereInput
  }

  export type GroupMemberUpdateToOneWithWhereWithoutOwingBalancesInput = {
    where?: GroupMemberWhereInput
    data: XOR<GroupMemberUpdateWithoutOwingBalancesInput, GroupMemberUncheckedUpdateWithoutOwingBalancesInput>
  }

  export type GroupMemberUpdateWithoutOwingBalancesInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    owedBalances?: GroupMemberBalanceUpdateManyWithoutOwedToNestedInput
    paidTransactions?: TransactionUpdateManyWithoutPaidByNestedInput
    participatedTransactions?: TransactionParticipantUpdateManyWithoutMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutOwingBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    owedBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedToNestedInput
    paidTransactions?: TransactionUncheckedUpdateManyWithoutPaidByNestedInput
    participatedTransactions?: TransactionParticipantUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type GroupMemberUpsertWithoutOwedBalancesInput = {
    update: XOR<GroupMemberUpdateWithoutOwedBalancesInput, GroupMemberUncheckedUpdateWithoutOwedBalancesInput>
    create: XOR<GroupMemberCreateWithoutOwedBalancesInput, GroupMemberUncheckedCreateWithoutOwedBalancesInput>
    where?: GroupMemberWhereInput
  }

  export type GroupMemberUpdateToOneWithWhereWithoutOwedBalancesInput = {
    where?: GroupMemberWhereInput
    data: XOR<GroupMemberUpdateWithoutOwedBalancesInput, GroupMemberUncheckedUpdateWithoutOwedBalancesInput>
  }

  export type GroupMemberUpdateWithoutOwedBalancesInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    owingBalances?: GroupMemberBalanceUpdateManyWithoutOwedByNestedInput
    paidTransactions?: TransactionUpdateManyWithoutPaidByNestedInput
    participatedTransactions?: TransactionParticipantUpdateManyWithoutMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutOwedBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    owingBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedByNestedInput
    paidTransactions?: TransactionUncheckedUpdateManyWithoutPaidByNestedInput
    participatedTransactions?: TransactionParticipantUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type GroupCreateWithoutTransactionsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    balances?: GroupMemberBalanceCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    balances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutTransactionsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutTransactionsInput, GroupUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    email: string
    name?: string | null
    password?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    provider?: $Enums.Provider
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    groups?: GroupMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    email: string
    name?: string | null
    password?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    provider?: $Enums.Provider
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type GroupMemberCreateWithoutPaidTransactionsInput = {
    joinedAt?: Date | string
    isAdmin?: boolean
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupsInput
    owedBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedToInput
    owingBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedByInput
    participatedTransactions?: TransactionParticipantCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberUncheckedCreateWithoutPaidTransactionsInput = {
    id?: number
    groupId: number
    userId: number
    joinedAt?: Date | string
    isAdmin?: boolean
    owedBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedToInput
    owingBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedByInput
    participatedTransactions?: TransactionParticipantUncheckedCreateNestedManyWithoutMemberInput
  }

  export type GroupMemberCreateOrConnectWithoutPaidTransactionsInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutPaidTransactionsInput, GroupMemberUncheckedCreateWithoutPaidTransactionsInput>
  }

  export type TransactionParticipantCreateWithoutTransactionInput = {
    splitAmount: Decimal | DecimalJsLike | number | string
    member: GroupMemberCreateNestedOneWithoutParticipatedTransactionsInput
  }

  export type TransactionParticipantUncheckedCreateWithoutTransactionInput = {
    id?: number
    memberId: number
    splitAmount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionParticipantCreateOrConnectWithoutTransactionInput = {
    where: TransactionParticipantWhereUniqueInput
    create: XOR<TransactionParticipantCreateWithoutTransactionInput, TransactionParticipantUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionParticipantCreateManyTransactionInputEnvelope = {
    data: TransactionParticipantCreateManyTransactionInput | TransactionParticipantCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutTransactionsInput = {
    update: XOR<GroupUpdateWithoutTransactionsInput, GroupUncheckedUpdateWithoutTransactionsInput>
    create: XOR<GroupCreateWithoutTransactionsInput, GroupUncheckedCreateWithoutTransactionsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutTransactionsInput, GroupUncheckedUpdateWithoutTransactionsInput>
  }

  export type GroupUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    balances?: GroupMemberBalanceUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    balances?: GroupMemberBalanceUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupMemberUpsertWithoutPaidTransactionsInput = {
    update: XOR<GroupMemberUpdateWithoutPaidTransactionsInput, GroupMemberUncheckedUpdateWithoutPaidTransactionsInput>
    create: XOR<GroupMemberCreateWithoutPaidTransactionsInput, GroupMemberUncheckedCreateWithoutPaidTransactionsInput>
    where?: GroupMemberWhereInput
  }

  export type GroupMemberUpdateToOneWithWhereWithoutPaidTransactionsInput = {
    where?: GroupMemberWhereInput
    data: XOR<GroupMemberUpdateWithoutPaidTransactionsInput, GroupMemberUncheckedUpdateWithoutPaidTransactionsInput>
  }

  export type GroupMemberUpdateWithoutPaidTransactionsInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    owedBalances?: GroupMemberBalanceUpdateManyWithoutOwedToNestedInput
    owingBalances?: GroupMemberBalanceUpdateManyWithoutOwedByNestedInput
    participatedTransactions?: TransactionParticipantUpdateManyWithoutMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutPaidTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    owedBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedToNestedInput
    owingBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedByNestedInput
    participatedTransactions?: TransactionParticipantUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type TransactionParticipantUpsertWithWhereUniqueWithoutTransactionInput = {
    where: TransactionParticipantWhereUniqueInput
    update: XOR<TransactionParticipantUpdateWithoutTransactionInput, TransactionParticipantUncheckedUpdateWithoutTransactionInput>
    create: XOR<TransactionParticipantCreateWithoutTransactionInput, TransactionParticipantUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionParticipantUpdateWithWhereUniqueWithoutTransactionInput = {
    where: TransactionParticipantWhereUniqueInput
    data: XOR<TransactionParticipantUpdateWithoutTransactionInput, TransactionParticipantUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionParticipantUpdateManyWithWhereWithoutTransactionInput = {
    where: TransactionParticipantScalarWhereInput
    data: XOR<TransactionParticipantUpdateManyMutationInput, TransactionParticipantUncheckedUpdateManyWithoutTransactionInput>
  }

  export type TransactionCreateWithoutParticipantsInput = {
    description: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutTransactionsInput
    createdBy: UserCreateNestedOneWithoutTransactionsInput
    paidBy: GroupMemberCreateNestedOneWithoutPaidTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutParticipantsInput = {
    id?: number
    description: string
    amount: Decimal | DecimalJsLike | number | string
    groupId: number
    createdById: number
    paidByMemberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutParticipantsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutParticipantsInput, TransactionUncheckedCreateWithoutParticipantsInput>
  }

  export type GroupMemberCreateWithoutParticipatedTransactionsInput = {
    joinedAt?: Date | string
    isAdmin?: boolean
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupsInput
    owedBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedToInput
    owingBalances?: GroupMemberBalanceCreateNestedManyWithoutOwedByInput
    paidTransactions?: TransactionCreateNestedManyWithoutPaidByInput
  }

  export type GroupMemberUncheckedCreateWithoutParticipatedTransactionsInput = {
    id?: number
    groupId: number
    userId: number
    joinedAt?: Date | string
    isAdmin?: boolean
    owedBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedToInput
    owingBalances?: GroupMemberBalanceUncheckedCreateNestedManyWithoutOwedByInput
    paidTransactions?: TransactionUncheckedCreateNestedManyWithoutPaidByInput
  }

  export type GroupMemberCreateOrConnectWithoutParticipatedTransactionsInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutParticipatedTransactionsInput, GroupMemberUncheckedCreateWithoutParticipatedTransactionsInput>
  }

  export type TransactionUpsertWithoutParticipantsInput = {
    update: XOR<TransactionUpdateWithoutParticipantsInput, TransactionUncheckedUpdateWithoutParticipantsInput>
    create: XOR<TransactionCreateWithoutParticipantsInput, TransactionUncheckedCreateWithoutParticipantsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutParticipantsInput, TransactionUncheckedUpdateWithoutParticipantsInput>
  }

  export type TransactionUpdateWithoutParticipantsInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    paidBy?: GroupMemberUpdateOneRequiredWithoutPaidTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    groupId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    paidByMemberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpsertWithoutParticipatedTransactionsInput = {
    update: XOR<GroupMemberUpdateWithoutParticipatedTransactionsInput, GroupMemberUncheckedUpdateWithoutParticipatedTransactionsInput>
    create: XOR<GroupMemberCreateWithoutParticipatedTransactionsInput, GroupMemberUncheckedCreateWithoutParticipatedTransactionsInput>
    where?: GroupMemberWhereInput
  }

  export type GroupMemberUpdateToOneWithWhereWithoutParticipatedTransactionsInput = {
    where?: GroupMemberWhereInput
    data: XOR<GroupMemberUpdateWithoutParticipatedTransactionsInput, GroupMemberUncheckedUpdateWithoutParticipatedTransactionsInput>
  }

  export type GroupMemberUpdateWithoutParticipatedTransactionsInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    owedBalances?: GroupMemberBalanceUpdateManyWithoutOwedToNestedInput
    owingBalances?: GroupMemberBalanceUpdateManyWithoutOwedByNestedInput
    paidTransactions?: TransactionUpdateManyWithoutPaidByNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutParticipatedTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    owedBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedToNestedInput
    owingBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedByNestedInput
    paidTransactions?: TransactionUncheckedUpdateManyWithoutPaidByNestedInput
  }

  export type UserRoleCreateManyUserInput = {
    id?: number
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateManyUserInput = {
    id?: number
    groupId: number
    joinedAt?: Date | string
    isAdmin?: boolean
  }

  export type TransactionCreateManyCreatedByInput = {
    id?: number
    description: string
    amount: Decimal | DecimalJsLike | number | string
    groupId: number
    paidByMemberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    owedBalances?: GroupMemberBalanceUpdateManyWithoutOwedToNestedInput
    owingBalances?: GroupMemberBalanceUpdateManyWithoutOwedByNestedInput
    paidTransactions?: TransactionUpdateManyWithoutPaidByNestedInput
    participatedTransactions?: TransactionParticipantUpdateManyWithoutMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    owedBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedToNestedInput
    owingBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedByNestedInput
    paidTransactions?: TransactionUncheckedUpdateManyWithoutPaidByNestedInput
    participatedTransactions?: TransactionParticipantUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpdateWithoutCreatedByInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutTransactionsNestedInput
    paidBy?: GroupMemberUpdateOneRequiredWithoutPaidTransactionsNestedInput
    participants?: TransactionParticipantUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    groupId?: IntFieldUpdateOperationsInput | number
    paidByMemberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: TransactionParticipantUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    groupId?: IntFieldUpdateOperationsInput | number
    paidByMemberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyRoleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyGroupInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
    isAdmin?: boolean
  }

  export type TransactionCreateManyGroupInput = {
    id?: number
    description: string
    amount: Decimal | DecimalJsLike | number | string
    createdById: number
    paidByMemberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberBalanceCreateManyGroupInput = {
    id?: number
    owedByMemberId: number
    owedToMemberId: number
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    owedBalances?: GroupMemberBalanceUpdateManyWithoutOwedToNestedInput
    owingBalances?: GroupMemberBalanceUpdateManyWithoutOwedByNestedInput
    paidTransactions?: TransactionUpdateManyWithoutPaidByNestedInput
    participatedTransactions?: TransactionParticipantUpdateManyWithoutMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    owedBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedToNestedInput
    owingBalances?: GroupMemberBalanceUncheckedUpdateManyWithoutOwedByNestedInput
    paidTransactions?: TransactionUncheckedUpdateManyWithoutPaidByNestedInput
    participatedTransactions?: TransactionParticipantUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpdateWithoutGroupInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    paidBy?: GroupMemberUpdateOneRequiredWithoutPaidTransactionsNestedInput
    participants?: TransactionParticipantUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdById?: IntFieldUpdateOperationsInput | number
    paidByMemberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: TransactionParticipantUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdById?: IntFieldUpdateOperationsInput | number
    paidByMemberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberBalanceUpdateWithoutGroupInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    owedBy?: GroupMemberUpdateOneRequiredWithoutOwingBalancesNestedInput
    owedTo?: GroupMemberUpdateOneRequiredWithoutOwedBalancesNestedInput
  }

  export type GroupMemberBalanceUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    owedByMemberId?: IntFieldUpdateOperationsInput | number
    owedToMemberId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberBalanceUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    owedByMemberId?: IntFieldUpdateOperationsInput | number
    owedToMemberId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberBalanceCreateManyOwedToInput = {
    id?: number
    groupId: number
    owedByMemberId: number
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type GroupMemberBalanceCreateManyOwedByInput = {
    id?: number
    groupId: number
    owedToMemberId: number
    amount?: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type TransactionCreateManyPaidByInput = {
    id?: number
    description: string
    amount: Decimal | DecimalJsLike | number | string
    groupId: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionParticipantCreateManyMemberInput = {
    id?: number
    transactionId: number
    splitAmount: Decimal | DecimalJsLike | number | string
  }

  export type GroupMemberBalanceUpdateWithoutOwedToInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutBalancesNestedInput
    owedBy?: GroupMemberUpdateOneRequiredWithoutOwingBalancesNestedInput
  }

  export type GroupMemberBalanceUncheckedUpdateWithoutOwedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    owedByMemberId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberBalanceUncheckedUpdateManyWithoutOwedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    owedByMemberId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberBalanceUpdateWithoutOwedByInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutBalancesNestedInput
    owedTo?: GroupMemberUpdateOneRequiredWithoutOwedBalancesNestedInput
  }

  export type GroupMemberBalanceUncheckedUpdateWithoutOwedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    owedToMemberId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberBalanceUncheckedUpdateManyWithoutOwedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    owedToMemberId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutPaidByInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    participants?: TransactionParticipantUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPaidByInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    groupId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: TransactionParticipantUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutPaidByInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    groupId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionParticipantUpdateWithoutMemberInput = {
    splitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction?: TransactionUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type TransactionParticipantUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    splitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionParticipantUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    splitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionParticipantCreateManyTransactionInput = {
    id?: number
    memberId: number
    splitAmount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionParticipantUpdateWithoutTransactionInput = {
    splitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    member?: GroupMemberUpdateOneRequiredWithoutParticipatedTransactionsNestedInput
  }

  export type TransactionParticipantUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    splitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionParticipantUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    splitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}