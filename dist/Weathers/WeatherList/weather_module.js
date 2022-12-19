"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherListModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_ex_module_1 = require("../Custom/typeorm-ex.module");
const todolist_repository_1 = require("./Repository/todolist.repository");
const weather_controller_1 = require("./weather_controller");
const weather_service_1 = require("./weather_service");
let WeatherListModule = class WeatherListModule {
};
WeatherListModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([todolist_repository_1.WeatherListRepository])],
        controllers: [weather_controller_1.WeatherController],
        providers: [weather_service_1.WeatherService]
    })
], WeatherListModule);
exports.WeatherListModule = WeatherListModule;
//# sourceMappingURL=weather_module.js.map