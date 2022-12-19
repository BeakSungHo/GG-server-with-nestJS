import { CreateToDoListDto } from './dto/create-todolist.dto';
import { TodoList } from './entity/todo_list.entity';
import { ToDoListRepository } from './Repository/todolist.repository';
export declare class TodoListService {
    private todoListRepository;
    constructor(todoListRepository: ToDoListRepository);
    getAllTodoList(): Promise<TodoList[]>;
    createToDoList(CreateToDoListDto: CreateToDoListDto): Promise<TodoList>;
    updateToDoListStatus(id: number, CreateToDoListDto: CreateToDoListDto): Promise<TodoList>;
}
