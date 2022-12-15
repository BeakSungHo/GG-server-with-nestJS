import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ChatBotModule } from './GG-Project_Server/chat-bot/chat-bot.module';
import { typeORMConfig } from './GG-Project_Server/configs/typeorm.config';
import { GgmapModule } from './GG-Project_Server/ggmap/ggmap.module';
import { MainFormModule } from './GG-Project_Server/main-form/main-form.module';
//import { typeORMConfig } from './Weathers/configs/typeorm.config';
//import { WeatherListModule } from './Weathers/WeatherList/weather_module';
//import { TodoListModule } from './todo_list all/todo-list/todo-list.module';
//import { typeORMConfig } from './todo_list all/configs/typeorm.config';
import { TestModule } from './test/test.module';


@Module({
  //imports: [TypeOrmModule.forRoot(typeORMConfig),WeatherListModule],
  imports: [MainFormModule, TypeOrmModule.forRoot(typeORMConfig), GgmapModule, ChatBotModule, TestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
