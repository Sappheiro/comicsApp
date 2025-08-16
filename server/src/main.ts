import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();           // allow cross-origin requests (dev)
  await app.listen(3000);     // backend listens on localhost:3000
}
bootstrap();

