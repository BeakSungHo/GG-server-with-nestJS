import { CreateToDoListDto } from './dto/create-todolist.dto';
import { TodoList } from './entity/todo_list.entity';
import { TodoListService } from './todo-list.service';
export declare class TodoListController {
    private todolistService;
    constructor(todolistService: TodoListService);
    getAllTodoList(): Promise<TodoList[]>;
    updateToDoListStatus(id: number, CreateToDoListDto: CreateToDoListDto): Promise<TodoList>;
    createToDoList(CreateToDoListDto: CreateToDoListDto): Promise<TodoList>;
}
