import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './application/root';

const { TAS_GQL_PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(TAS_GQL_PORT ?? 3003);
  // eslint-disable-next-line no-console
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
