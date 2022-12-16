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
exports.GgmapController = void 0;
const common_1 = require("@nestjs/common");
const ggmap_service_1 = require("./ggmap.service");
let GgmapController = class GgmapController {
    constructor(GgmapService) {
        this.GgmapService = GgmapService;
    }
    getmap() {
        return "에러뜨면 옥상으로 따라와!!🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬ㅍ";
    }
    getMarkerInfo(getID) {
        return this.GgmapService.getMarkerInfo(getID);
    }
    getAllMarkerInfo() {
        return this.GgmapService.getAllMarkerInfo();
    }
    createMarkerInfo(createMarkerInfo) {
        return this.GgmapService.createMarkerInfo(createMarkerInfo);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GgmapController.prototype, "getmap", null);
__decorate([
    (0, common_1.Get)('/comeonbaby'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GgmapController.prototype, "getMarkerInfo", null);
__decorate([
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GgmapController.prototype, "getAllMarkerInfo", null);
__decorate([
    (0, common_1.Post)('/test'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GgmapController.prototype, "createMarkerInfo", null);
GgmapController = __decorate([
    (0, common_1.Controller)('ggmap'),
    __metadata("design:paramtypes", [ggmap_service_1.GgmapService])
], GgmapController);
exports.GgmapController = GgmapController;
//# sourceMappingURL=ggmap.controller.js.map