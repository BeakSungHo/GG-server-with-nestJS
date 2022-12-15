import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '../Custom/typeorm-ex.module';
import { ConfigModule } from '@nestjs/config';
//import { TypeOrmExModule } from 'src/Custom/typeorm-ex.module';
import { MainFormController } from './main-form.controller';
import { MainFormService } from './main-form.service';
import { PostRepository } from './Repository/Posts.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([PostRepository])],
  controllers: [MainFormController],
  providers: [MainFormService],
})
export class MainFormModule {}
