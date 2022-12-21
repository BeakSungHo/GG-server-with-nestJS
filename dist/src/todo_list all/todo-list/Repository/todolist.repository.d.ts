import { Repository } from 'typeorm';
import { CreateToDoListDto } from '../dto/create-todolist.dto';
import { TodoList } from '../entity/todo_list.entity';
export declare class ToDoListRepository extends Repository<TodoList> {
    createToDoList(CreateToDoListDto: CreateToDoListDto): Promise<TodoList>;
    getAllTodoList(): Promise<TodoList[]>;
    updateToDoListStatus(id: number, CreateToDoListDto: CreateToDoListDto): Promise<TodoList>;
    getToDoListByid(id: number): Promise<TodoList>;
}
