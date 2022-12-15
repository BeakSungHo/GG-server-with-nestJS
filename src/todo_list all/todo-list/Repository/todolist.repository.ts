
import { NotFoundException } from '@nestjs/common';
import { CustomRepository } from 'src/todo_list all/Custom/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { CreateToDoListDto } from '../dto/create-todolist.dto';

import { TodoList } from '../entity/todo_list.entity';
//import{NotFoundException} from 

@CustomRepository(TodoList)
export class ToDoListRepository extends Repository<TodoList> {

    async createToDoList(CreateToDoListDto:CreateToDoListDto):Promise<TodoList>{
      const{text,done}=CreateToDoListDto;
      const todo = this.create({
        text,
        done,
      })
      await this.save(todo);
      return todo;
    }

    async getAllTodoList():Promise<TodoList[]>{
      const allTodoList=await this.find();
      return allTodoList;
    }
    async updateToDoListStatus(id:number, CreateToDoListDto:CreateToDoListDto):Promise<TodoList>{
      const {text,done}=CreateToDoListDto;
      const todolist = await this.getToDoListByid(id)
      todolist.text=text
      todolist.done=done
      await this.save(todolist);
      return todolist;
    }

    async getToDoListByid(id: number):Promise<TodoList>{//해당아이디가 있는지 확인하는 함수
      const found = await this.findOne({ where: { id } });
      if (!found) {
        throw new NotFoundException(`응애 이건없는걸~ => ${id}`);
      }
      return found;
    }
}
