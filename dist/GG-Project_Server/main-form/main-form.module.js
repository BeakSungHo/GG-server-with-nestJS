"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainFormModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_ex_module_1 = require("../Custom/typeorm-ex.module");
const main_form_controller_1 = require("./main-form.controller");
const main_form_service_1 = require("./main-form.service");
const Posts_repository_1 = require("./Repository/Posts.repository");
let MainFormModule = class MainFormModule {
};
MainFormModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([Posts_repository_1.PostRepository])],
        controllers: [main_form_controller_1.MainFormController],
        providers: [main_form_service_1.MainFormService],
    })
], MainFormModule);
exports.MainFormModule = MainFormModule;
//# sourceMappingURL=main-form.module.js.map