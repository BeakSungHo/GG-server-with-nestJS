"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GgmapModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_ex_module_1 = require("../Custom/typeorm-ex.module");
const ggmap_controller_1 = require("./ggmap.controller");
const ggmap_service_1 = require("./ggmap.service");
const MarkerInfoRepository_repository_1 = require("./Repository/MarkerInfoRepository.repository");
let GgmapModule = class GgmapModule {
};
GgmapModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([MarkerInfoRepository_repository_1.MarkerInfoRepository])],
        controllers: [ggmap_controller_1.GgmapController],
        providers: [ggmap_service_1.GgmapService]
    })
], GgmapModule);
exports.GgmapModule = GgmapModule;
//# sourceMappingURL=ggmap.module.js.map