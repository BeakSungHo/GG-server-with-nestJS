import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { WSPasingContactInformation} from './WSPasing-Contact-Information';
const cheerio = require("cheerio");

@Injectable()
export class ChatBotService {
        // controller에서 받은 작업의 처리를 받는 곳
        getContactInformation(): Promise<string[]>{
                return WSPasingContactInformation()
        }

}

