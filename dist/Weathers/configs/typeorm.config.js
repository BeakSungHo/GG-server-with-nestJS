"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const weather_entity_1 = require("../WeatherList/entity/weather_entity");
exports.typeORMConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '9023',
    database: 'weather-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}', weather_entity_1.WeatherList],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map