import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
//import { resolvers } from '@generated/type-graphql';
import PrismaModule from './modules/prisma';

//import { resolvers } from '../src/generated/type-graphql';
import { resolvers } from './generated/type-graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { createTypeGraphqlModule } from './modules/typegraphql';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeGraphQLModule.forRoot({
    //   validate: false,
    //   context: (): Context => ({ prisma }),
    // }),
    createTypeGraphqlModule(),
    PrismaModule,
  ],

  controllers: [AppController],
  providers: [
    ...(resolvers as unknown as Provider<any>[]),
    AppService,
    ConfigService,
  ],
  exports: [ConfigService],
})
export class AppModule {}
