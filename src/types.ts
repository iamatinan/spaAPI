import { PrismaClient } from '@prisma/client';
import { GraphqlCtx as NestJSGraphqlCtx } from '@somjet/nestjs-keycloak-typegraphql';

export interface GraphqlCtx extends NestJSGraphqlCtx {
  prisma: PrismaClient;
}

export interface HashMap<T = any> {
  [key: string]: T;
}
