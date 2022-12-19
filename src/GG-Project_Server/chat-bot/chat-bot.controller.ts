import { Body, Controller, Get } from '@nestjs/common';
import { ChatBotService } from './chat-bot.service';


// 1. 열었을 때 가이드              //?
// 2. 시나리오 기반의 틀을 제작     //?

// 3. 학사일정                       //주소  년도 별로 변경?
            //년도별로 수동적으로 바꿔주어야하는데? (사이트에서 알잘딱해줌 그러믕로 파싱이 용건?)
            //https://www.wsu.ac.kr/page/index.jsp?code=campus0101# 학과사이트

// 4. 맵 이동                        //맵이동부분은 제거한다고함 맵에서 검색이 가능하니깐 쓸모없다고 판단

// 5. 식단                          //주소 클라이언트 인줄알앗는데 크롤링이 필요함 
            //https://www.wsu.ac.kr/page/index.jsp?code=campus0806
            //자동임으로 가져오는것이 중요함 

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

    // 파싱된 전화번호를 받는곳 이곳을 폐기할예정
    @Get('/')
    getContactInformation(): Promise<string[]>{
      return this.ChatBotService.getContactInformation();
    }

    @Get('/student_cafeteria')
    getStudentCafeteria():Promise<String[]>{
      return this.ChatBotService.getStudentCafeteria();
    }
    

}
