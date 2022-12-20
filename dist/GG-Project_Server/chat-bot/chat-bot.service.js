"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBotService = void 0;
const common_1 = require("@nestjs/common");
const WSCrawling_Contact_StudentCafeteria_1 = require("./pasing/WSCrawling-Contact-StudentCafeteria");
const WSPasing_Contact_Information_1 = require("./pasing/WSPasing-Contact-Information");
const cheerio = require("cheerio");
let ChatBotService = class ChatBotService {
    getContactInformation() {
        return (0, WSPasing_Contact_Information_1.WSPasingContactInformation)();
    }
    getStudentCafeteria() {
        return (0, WSCrawling_Contact_StudentCafeteria_1.WSCrawlingContactStudentCafeteria)();
    }
};
ChatBotService = __decorate([
    (0, common_1.Injectable)()
], ChatBotService);
exports.ChatBotService = ChatBotService;
//# sourceMappingURL=chat-bot.service.js.map