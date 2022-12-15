

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { WeatherList } from '../WeatherList/entity/weather_entity';


export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '9023',
  database: 'weather-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}', WeatherList],
  synchronize: true,
};
