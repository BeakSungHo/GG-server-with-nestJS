"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkerInfoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_ex_decorator_1 = require("../../Custom/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const MarkerInfo_entity_1 = require("../Entity/MarkerInfo.entity");
let MarkerInfoRepository = class MarkerInfoRepository extends typeorm_1.Repository {
    async createMarkerInfo(createMarkerInfo) {
        const { title, imgName, text, latitude, longtitude } = createMarkerInfo;
        const wspost = this.create({
            title,
            imgName,
            text,
            latitude,
            longtitude,
        });
        await this.save(wspost);
        return wspost;
    }
    async getMarkerInfo(getID) {
        const { id } = getID;
        const MarkerInfo = await this.getMarkerInfoBykey(id);
        MarkerInfo.imgName = `https://wsggbucket.s3.ap-northeast-2.amazonaws.com/${MarkerInfo.imgName}`;
        return MarkerInfo;
    }
    async getAllMarkerInfo() {
        const allMarkerInfoList = await this.find();
        return allMarkerInfoList;
    }
    async getMarkerInfoBykey(id) {
        const found = await this.findOne({ where: { id } });
        if (!found) {
            throw new common_1.NotFoundException(`현재 등록되지않는 마크 => ${id}`);
        }
        return found;
    }
};
MarkerInfoRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(MarkerInfo_entity_1.MarkerInfo)
], MarkerInfoRepository);
exports.MarkerInfoRepository = MarkerInfoRepository;
//# sourceMappingURL=MarkerInfoRepository.repository.js.map