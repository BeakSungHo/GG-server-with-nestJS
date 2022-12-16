"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherListRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_ex_decorator_1 = require("../../../todo_list all/Custom/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const weather_entity_1 = require("../entity/weather_entity");
let WeatherListRepository = class WeatherListRepository extends typeorm_1.Repository {
    async createWeatherList(CreateWeatherDto) {
        const { name, latitude, longitude } = CreateWeatherDto;
        const wheader = this.create({
            name,
            latitude,
            longitude
        });
        await this.save(wheader);
        return wheader;
    }
    async getAllWeatherList() {
        const allWeatherList = await this.find();
        return allWeatherList;
    }
    async getAllLcoationName() {
        const qb = await this
            .createQueryBuilder('WeatherList')
            .select('WeatherList.name', 'WeatherList_name');
        return qb.getMany();
    }
    async getWeather(CreateWeatherDto) {
        const { name } = CreateWeatherDto;
        const qb = await this
            .createQueryBuilder('WeatherList')
            .select('WeatherList.longitude', 'WeatherList_longitude')
            .addSelect('WeatherList.latitude', 'WeatherList_latitude');
        qb.andWhere('WeatherList.name=:name', { name });
        return this.Weathers((await qb.getOne()).latitude, (await qb.getOne()).longitude);
    }
    async Weathers(latitude, longitude) {
        const API_KEY = "2fd82d9a978c2adf1404ff93711101a1";
        const weather = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)).json();
        const values = [weather.weather[0].main, weather.main.temp, weather.name];
        return values;
    }
    async updateWeatherList(id, CreateWeatherDto) {
        const { name, latitude, longitude } = CreateWeatherDto;
        const wheaterList = await this.getWeatherByid(id);
        wheaterList.name = name;
        wheaterList.latitude = latitude;
        wheaterList.longitude = longitude;
        await this.save(wheaterList);
        return wheaterList;
    }
    async getWeatherByname(name) {
        const found = await this.findOne({ where: { name } });
        if (!found) {
            throw new common_1.NotFoundException(`현제 등록되지않는 지역 => ${name}`);
        }
        return found;
    }
    async getWeatherByid(id) {
        const found = await this.findOne({ where: { id } });
        if (!found) {
            throw new common_1.NotFoundException(`현제 등록되지않는 지역 => ${id}`);
        }
        return found;
    }
};
WeatherListRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(weather_entity_1.WeatherList)
], WeatherListRepository);
exports.WeatherListRepository = WeatherListRepository;
//# sourceMappingURL=todolist.repository.js.map