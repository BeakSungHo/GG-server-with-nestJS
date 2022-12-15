import { Body, Controller, Get } from '@nestjs/common';
import { ChatBotService } from './chat-bot.service';

// 이것은 실험하는 거시요?
const enjel:string='a';
// 1. 열었을 때 가이드              //?
// 2. 시나리오 기반의 틀을 제작     //?

// 3. 학사일정                       //주소  년도 별로 변경?

// 4. 맵 이동                        //데이터베이스 참고 검색하여 반납

// 5. 식단                          //주소 클라이언트

// 6. 장학일정                       //주소  년도 별로 변경?

// 7. 교내연락처                     //학교 홈페이지 파싱
// https://ent.wsu.ac.kr/page/index.jsp?code=einfo0501

// 8. 도서관이용                    //주소 클라이언트

// 9. 등록금                         //주소  년도 별로 변경?

// 10. 수강신청                      //주소  년도 별로 변경?
@Controller('chat-bot')

export class ChatBotController {
    constructor(private ChatBotService:ChatBotService){}

    
    //채팅에관한 get post patch등 처리를 받는 곳
    @Get('/')
    getContactInformation(): Promise<string[]>{
      return this.ChatBotService.getContactInformation();
    }
    

}
