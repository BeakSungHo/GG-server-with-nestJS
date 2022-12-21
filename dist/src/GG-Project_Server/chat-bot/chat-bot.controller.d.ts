import { ChatBotService } from './chat-bot.service';
export declare class ChatBotController {
    private ChatBotService;
    constructor(ChatBotService: ChatBotService);
    getContactInformation(): Promise<string[]>;
    getSearch(str: any): Promise<string>;
    getStudentCafeteria(): Promise<any>;
}
