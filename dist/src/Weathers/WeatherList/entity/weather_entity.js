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
exports.WeatherList = void 0;
const typeorm_1 = require("typeorm");
let WeatherList = class WeatherList extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WeatherList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WeatherList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('real'),
    __metadata("design:type", Number)
], WeatherList.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)('real'),
    __metadata("design:type", Number)
], WeatherList.prototype, "longitude", void 0);
WeatherList = __decorate([
    (0, typeorm_1.Entity)()
], WeatherList);
exports.WeatherList = WeatherList;
//# sourceMappingURL=weather_entity.js.map