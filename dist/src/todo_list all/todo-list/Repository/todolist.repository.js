"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoListRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_ex_decorator_1 = require("../../Custom/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const todo_list_entity_1 = require("../entity/todo_list.entity");
let ToDoListRepository = class ToDoListRepository extends typeorm_1.Repository {
    async createToDoList(CreateToDoListDto) {
        const { text, done } = CreateToDoListDto;
        const todo = this.create({
            text,
            done,
        });
        await this.save(todo);
        return todo;
    }
    async getAllTodoList() {
        const allTodoList = await this.find();
        return allTodoList;
    }
    async updateToDoListStatus(id, CreateToDoListDto) {
        const { text, done } = CreateToDoListDto;
        const todolist = await this.getToDoListByid(id);
        todolist.text = text;
        todolist.done = done;
        await this.save(todolist);
        return todolist;
    }
    async getToDoListByid(id) {
        const found = await this.findOne({ where: { id } });
        if (!found) {
            throw new common_1.NotFoundException(`응애 이건없는걸~ => ${id}`);
        }
        return found;
    }
};
ToDoListRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(todo_list_entity_1.TodoList)
], ToDoListRepository);
exports.ToDoListRepository = ToDoListRepository;
//# sourceMappingURL=todolist.repository.js.map