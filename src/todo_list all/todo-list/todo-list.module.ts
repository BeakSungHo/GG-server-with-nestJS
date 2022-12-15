import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '../Custom/typeorm-ex.module';
import { ToDoListRepository } from './Repository/todolist.repository';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './todo-list.service';

@Module({
 // imports:[TypeOrmExModule.forCustomRepository([ToDoListRepository])],
  imports:[TypeOrmExModule.forCustomRepository([ToDoListRepository])],
  controllers: [TodoListController],
  providers: [TodoListService]
})
export class TodoListModule {}
