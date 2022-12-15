import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ApiMarkers } from '../ggmap/Entity/ApiMarkers.entitiy';
import { MarkerInfo } from '../ggmap/Entity/MarkerInfo.entity';
import { WSPost } from '../main-form/Entity/Posts.entity';
// import { ApiMarkers } from 'src/ggmap/Entity/ApiMarkers.entitiy';
// import { MarkerInfo } from 'src/ggmap/Entity/MarkerInfo.entity';
// import { Post } from 'src/main-form/Entity/Posts.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '9023',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}',
    WSPost,
    ApiMarkers,
    MarkerInfo,
  ],
  synchronize: true,
};
