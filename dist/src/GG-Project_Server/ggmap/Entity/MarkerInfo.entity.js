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
exports.MarkerInfo = void 0;
const typeorm_1 = require("typeorm");
let MarkerInfo = class MarkerInfo extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MarkerInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarkerInfo.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarkerInfo.prototype, "imgName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarkerInfo.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)('real'),
    __metadata("design:type", Number)
], MarkerInfo.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)('real'),
    __metadata("design:type", Number)
], MarkerInfo.prototype, "longtitude", void 0);
MarkerInfo = __decorate([
    (0, typeorm_1.Entity)()
], MarkerInfo);
exports.MarkerInfo = MarkerInfo;
//# sourceMappingURL=MarkerInfo.entity.js.map