import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '../Custom/typeorm-ex.module';
import { WeatherListRepository } from './Repository/todolist.repository';
import { WeatherController } from './weather_controller';
import { WeatherService } from './weather_service';
// import { ToDoListRepository } from 'src/todo_list all/todo-list/Repository/todolist.repository';
// import { TodoListController } from './todo-list.controller';
// import { TodoListService } from './todo-list.service';

@Module({
 // imports:[TypeOrmExModule.forCustomRepository([ToDoListRepository])],
  imports:[TypeOrmExModule.forCustomRepository([WeatherListRepository])],
  controllers: [WeatherController],
  providers: [WeatherService]
})
export class WeatherListModule {}


