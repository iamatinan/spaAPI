import ResponseCachePlugin from 'apollo-server-plugin-response-cache';
// import { BaseRedisCache } from 'apollo-server-cache-redis';
import { ConfigService } from '@nestjs/config';
import { DynamicModule, ForwardReference, Type } from '@nestjs/common';
import { GraphQLRequestContext } from 'apollo-server-types';
import { MIDDLEWARES, WRAP_CONTEXT } from '@somjet/nestjs-keycloak-typegraphql';
import { MiddlewareFn } from 'type-graphql';
// import { Redis } from 'ioredis';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { GraphqlCtx, HashMap } from 'src/types';
import { PrismaService } from 'src/modules/prisma';
// import { REDIS_CLIENT } from '~/modules/redis';

export function createTypeGraphqlModule(
  imports: Array<
    Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
  > = [],
): DynamicModule {
  return TypeGraphQLModule.forRootAsync({
    imports: [...imports],
    inject: [
      // RedisService,
      ConfigService,
      PrismaService,
      // REDIS_CLIENT,
      // MIDDLEWARES,
      //WRAP_CONTEXT,
    ],
    useFactory: (
      // redisService: RedisService,
      configService: ConfigService,
      prismaService: PrismaService,
      // redisClient: Redis,
      // middlewares: MiddlewareFn[],
      //wrapContext: (context: HashMap) => GraphqlCtx,
    ): any => {
      return {
        cors: configService.get('CORS') === '1',
        debug: configService.get('DEBUG') === '1',
        context: (context: HashMap) => {
          return {
            req: context?.request,
            prisma: prismaService,
          };
        },
        dateScalarMode: 'timestamp',
        emitSchemaFile: false,
        tracing: true,
        validate: true,
        playground:
          configService.get('GRAPHQL_PLAYGROUND') === '1' ||
          configService.get('DEBUG') === '1',
        introspection: configService.get('DEBUG') === '1',
        // globalMiddlewares: [...middlewares],
        ...(!!Number(configService.get('ENABLE_CACHING'))
          ? {
              cacheControl: {
                defaultMaxAge: Number(
                  configService.get('DEFAULT_MAX_AGE') || 60,
                ),
              },
            }
          : {}),
        // cache: new BaseRedisCache({
        //   client: redisClient,
        //   // client: redisService.getClient()
        // }),
        // persistedQueries: {
        //   cache: new BaseRedisCache({
        //     client: redisClient,
        //     // client: redisService.getClient()
        //   }),
        // },
        // plugins: [
        //   ...(!!Number(configService.get('ENABLE_CACHING'))
        //     ? [
        //         ResponseCachePlugin({
        //           sessionId: async ({
        //             context,
        //           }: GraphQLRequestContext<Record<string, any>>) => {
        //             return context.keycloakService?.getUserId();
        //           },
        //         }),
        //       ]
        //     : []),
        // ],
      };
    },
  });
}

export * from './cacheControl.decorator';
