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
exports.MainFormController = void 0;
const common_1 = require("@nestjs/common");
const main_form_service_1 = require("./main-form.service");
let MainFormController = class MainFormController {
    constructor(MainFormService) {
        this.MainFormService = MainFormService;
    }
    getPost() {
        return;
    }
    getAllImg() {
        return this.MainFormService.getAllImg();
    }
    getTest() {
        return this.MainFormService.getAllPost();
    }
    postTest(createWSPost) {
        return this.MainFormService.createWSPost(createWSPost);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MainFormController.prototype, "getPost", null);
__decorate([
    (0, common_1.Get)('/getimag'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MainFormController.prototype, "getAllImg", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MainFormController.prototype, "getTest", null);
__decorate([
    (0, common_1.Post)('/test'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MainFormController.prototype, "postTest", null);
MainFormController = __decorate([
    (0, common_1.Controller)('main-form'),
    __metadata("design:paramtypes", [main_form_service_1.MainFormService])
], MainFormController);
exports.MainFormController = MainFormController;
//# sourceMappingURL=main-form.controller.js.map