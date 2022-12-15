"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const ApiMarkers_entitiy_1 = require("../ggmap/Entity/ApiMarkers.entitiy");
const MarkerInfo_entity_1 = require("../ggmap/Entity/MarkerInfo.entity");
const Posts_entity_1 = require("../main-form/Entity/Posts.entity");
exports.typeORMConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '9023',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}',
        Posts_entity_1.WSPost,
        ApiMarkers_entitiy_1.ApiMarkers,
        MarkerInfo_entity_1.MarkerInfo,
    ],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map