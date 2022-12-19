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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
const common_1 = require("@nestjs/common");
const todolist_repository_1 = require("./Repository/todolist.repository");
let WeatherService = class WeatherService {
    constructor(weatherRepository) {
        this.weatherRepository = weatherRepository;
    }
    getAllWeather() {
        return this.weatherRepository.getAllWeatherList();
    }
    getAllLocationName() {
        return this.weatherRepository.getAllLcoationName();
    }
    getWeather(CreateWeatherDto) {
        return this.weatherRepository.getWeather(CreateWeatherDto);
    }
    createWeather(CreateWeatherDto) {
        return this.weatherRepository.createWeatherList(CreateWeatherDto);
    }
    updateWeatherStatus(id, CreateWeatherDto) {
        return this.weatherRepository.updateWeatherList(id, CreateWeatherDto);
    }
};
WeatherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [todolist_repository_1.WeatherListRepository])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather_service.js.map