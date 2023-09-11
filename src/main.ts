import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Prefijo antes de cualquier ruta de un endpoint, url base
  app.setGlobalPrefix("api/v1")

  //configuracion para validar datos de los endpoints, en caso de ser string y 
  //necesita un number lo transforma de manera automática
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform: true
    })
  )

  await app.listen(3000);
}
bootstrap();
