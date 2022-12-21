"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListController = void 0;
const common_1 = require("@nestjs/common");
const create_todolist_dto_1 = require("./dto/create-todolist.dto");
const todo_list_service_1 = require("./todo-list.service");
let TodoListController = class TodoListController {
    constructor(todolistService) {
        this.todolistService = todolistService;
    }
    getAllTodoList() {
        return this.todolistService.getAllTodoList();
    }
    updateToDoListStatus(id, CreateToDoListDto) {
        return this.todolistService.updateToDoListStatus(id, CreateToDoListDto);
    }
    createToDoList(CreateToDoListDto) {
        return this.todolistService.createToDoList(CreateToDoListDto);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoListController.prototype, "getAllTodoList", null);
__decorate([
    (0, common_1.Patch)("/:id/"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_todolist_dto_1.CreateToDoListDto]),
    __metadata("design:returntype", Promise)
], TodoListController.prototype, "updateToDoListStatus", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todolist_dto_1.CreateToDoListDto]),
    __metadata("design:returntype", Promise)
], TodoListController.prototype, "createToDoList", null);
TodoListController = __decorate([
    (0, common_1.Controller)('todo-list'),
    __metadata("design:paramtypes", [todo_list_service_1.TodoListService])
], TodoListController);
exports.TodoListController = TodoListController;
//# sourceMappingURL=todo-list.controller.js.map