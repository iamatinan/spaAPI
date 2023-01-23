import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(PORT || 5000, '0.0.0.0');
  console.log(`🚀  Server ready at ${await app.getUrl()}/graphql !`);
  console.log('sand');
  console.log('update');
}
bootstrap();
