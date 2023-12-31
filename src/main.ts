import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableCors();

  try {
    await app.listen(PORT, () =>
      console.log(`Server listening on PORT ${PORT}`),
    );
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
