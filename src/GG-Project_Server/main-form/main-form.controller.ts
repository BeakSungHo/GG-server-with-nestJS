import { Body, Controller, Get ,Post} from '@nestjs/common';
import { validate } from 'class-validator';
import { CreateToDoListDto } from 'src/todo_list all/todo-list/dto/create-todolist.dto';
import { brotliDecompressSync } from 'zlib';
import { WSPost } from './Entity/Posts.entity';
import { MainFormService } from './main-form.service';

@Controller('main-form')
export class MainFormController {
  constructor(private MainFormService:MainFormService ){}

  @Get('/')
  getPost(): Promise<WSPost[]> {
    return ;
  }

  //이미지가 파싱된 상태로 출력함 
  @Get('/getimag')
  getAllImg():Promise<string[]>{
    return this.MainFormService.getAllImg();
  }

  //모든데이터를 출력받음
  @Get('/all')
  getTest(): Promise<WSPost[]> {
    return this.MainFormService.getAllPost();
  }

  // 입력하는 곳 받는 데이터는 {title, imgName, description}:string
  @Post('/test')
  postTest(@Body() createWSPost):Promise<WSPost>{
    return this.MainFormService.createWSPost(createWSPost);
  }
}
