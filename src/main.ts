import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //cors은 보안 정책 뚫기위해서 추가함
  const app = await NestFactory.create(AppModule,{cors:true});
  await app.listen(4000);//포트번호 3000번을 사용중 내껀 4000 ㅇㅅㅇ
}
bootstrap();
