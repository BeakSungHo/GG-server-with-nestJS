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
exports.WeatherController = void 0;
const common_1 = require("@nestjs/common");
const create_weather_list_dto_1 = require("./dto/create-weather_list.dto");
const weather_service_1 = require("./weather_service");
let WeatherController = class WeatherController {
    constructor(WeatherService) {
        this.WeatherService = WeatherService;
    }
    getAllWeather() {
        return this.WeatherService.getAllWeather();
    }
    getAllLocationName() {
        return this.WeatherService.getAllLocationName();
    }
    getWeather(CreateWeatherDto) {
        return this.WeatherService.getWeather(CreateWeatherDto);
    }
    updateWeatherList(id, CreateWeatherDto) {
        return this.WeatherService.updateWeatherStatus(id, CreateWeatherDto);
    }
    creatWeatherList(CreateWeatherDto) {
        return this.WeatherService.createWeather(CreateWeatherDto);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "getAllWeather", null);
__decorate([
    (0, common_1.Get)('/locationname'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "getAllLocationName", null);
__decorate([
    (0, common_1.Get)('/weather'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_weather_list_dto_1.CreateWeatherDto]),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "getWeather", null);
__decorate([
    (0, common_1.Patch)("/:id/"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_weather_list_dto_1.CreateWeatherDto]),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "updateWeatherList", null);
__decorate([
    (0, common_1.Post)("/namesave"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_weather_list_dto_1.CreateWeatherDto]),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "creatWeatherList", null);
WeatherController = __decorate([
    (0, common_1.Controller)('weather-list'),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherController);
exports.WeatherController = WeatherController;
//# sourceMappingURL=weather_controller.js.map