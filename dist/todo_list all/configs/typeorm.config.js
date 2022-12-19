"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const todo_list_entity_1 = require("../todo-list/entity/todo_list.entity");
exports.typeORMConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '9023',
    database: 'todo-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}', todo_list_entity_1.TodoList],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map