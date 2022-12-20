import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { WSCrawlingContactStudentCafeteria } from './pasing/WSCrawling-Contact-StudentCafeteria';
import { WSPasingContactInformation} from './pasing/WSPasing-Contact-Information';
const cheerio = require("cheerio");

@Injectable()
export class ChatBotService {
        // controller에서 받은 작업의 처리를 받는 곳

        //전화번호를 크롤링 처리하는곳 폐기예정
        getContactInformation(): Promise<string[]>{
                return WSPasingContactInformation()
        }
        //학생식단의 정보를 받아오는곳
        getStudentCafeteria(){
                return WSCrawlingContactStudentCafeteria()
        }


}

