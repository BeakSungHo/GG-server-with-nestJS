import { Injectable } from '@nestjs/common';
import { CreateToDoListDto } from './dto/create-todolist.dto';
import { TodoList } from './entity/todo_list.entity';
import { ToDoListRepository } from './Repository/todolist.repository';

@Injectable()
export class TodoListService {
    constructor(private todoListRepository: ToDoListRepository) {}

    
    getAllTodoList():Promise<TodoList[]>{
        return this.todoListRepository.getAllTodoList();
    }
    createToDoList(CreateToDoListDto:CreateToDoListDto):Promise<TodoList>{
        return this.todoListRepository.createToDoList(CreateToDoListDto);
    }
    updateToDoListStatus(id:number,CreateToDoListDto:CreateToDoListDto):Promise<TodoList>{
        return this.todoListRepository.updateToDoListStatus(id,CreateToDoListDto);
    }
}

