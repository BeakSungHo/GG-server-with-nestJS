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
exports.ChatBotController = void 0;
const common_1 = require("@nestjs/common");
const chat_bot_service_1 = require("./chat-bot.service");
let ChatBotController = class ChatBotController {
    constructor(ChatBotService) {
        this.ChatBotService = ChatBotService;
    }
    getContactInformation() {
        return this.ChatBotService.getContactInformation();
    }
    getSearch(str) {
        return this.ChatBotService.getSearch(str);
    }
    getStudentCafeteria() {
        return this.ChatBotService.getStudentCafeteria();
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatBotController.prototype, "getContactInformation", null);
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatBotController.prototype, "getSearch", null);
__decorate([
    (0, common_1.Get)('/student_cafeteria'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatBotController.prototype, "getStudentCafeteria", null);
ChatBotController = __decorate([
    (0, common_1.Controller)('chat-bot'),
    __metadata("design:paramtypes", [chat_bot_service_1.ChatBotService])
], ChatBotController);
exports.ChatBotController = ChatBotController;
//# sourceMappingURL=chat-bot.controller.js.map