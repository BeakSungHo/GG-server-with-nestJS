

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TodoList } from '../todo-list/entity/todo_list.entity';


export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '9023',
  database: 'todo-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}', TodoList],
  synchronize: true,
};
