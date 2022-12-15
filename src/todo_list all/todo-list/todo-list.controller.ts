import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateToDoListDto } from './dto/create-todolist.dto';
import { TodoList } from './entity/todo_list.entity';
import { TodoListService } from './todo-list.service';

@Controller('todo-list')
export class TodoListController {
    constructor(private todolistService:TodoListService){}

    @Get('/')
    getAllTodoList():Promise<TodoList[]>{
        return this.todolistService.getAllTodoList();
        }

    @Patch("/:id/")
    @UsePipes(ValidationPipe)
    updateToDoListStatus(
        @Param('id')id:number,
        @Body() CreateToDoListDto:CreateToDoListDto):Promise<TodoList>
    {
        return this.todolistService.updateToDoListStatus(id,CreateToDoListDto)
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    createToDoList(@Body() CreateToDoListDto:CreateToDoListDto):Promise<TodoList>{
        return this.todolistService.createToDoList(CreateToDoListDto)
    }

}


