"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_ex_module_1 = require("../Custom/typeorm-ex.module");
const todolist_repository_1 = require("./Repository/todolist.repository");
const todo_list_controller_1 = require("./todo-list.controller");
const todo_list_service_1 = require("./todo-list.service");
let TodoListModule = class TodoListModule {
};
TodoListModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([todolist_repository_1.ToDoListRepository])],
        controllers: [todo_list_controller_1.TodoListController],
        providers: [todo_list_service_1.TodoListService]
    })
], TodoListModule);
exports.TodoListModule = TodoListModule;
//# sourceMappingURL=todo-list.module.js.map