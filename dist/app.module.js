"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/typeorm/dist");
const chat_bot_module_1 = require("./GG-Project_Server/chat-bot/chat-bot.module");
const typeorm_config_1 = require("./GG-Project_Server/configs/typeorm.config");
const ggmap_module_1 = require("./GG-Project_Server/ggmap/ggmap.module");
const main_form_module_1 = require("./GG-Project_Server/main-form/main-form.module");
const test_module_1 = require("./test/test.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [main_form_module_1.MainFormModule, dist_1.TypeOrmModule.forRoot(typeorm_config_1.typeORMConfig), ggmap_module_1.GgmapModule, chat_bot_module_1.ChatBotModule, test_module_1.TestModule],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map