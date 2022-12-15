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

  @Get('/getimag')
  getAllImg():Promise<string[]>{
    return this.MainFormService.getAllImg();
  }
  @Get('/test')
  getTest(): Promise<WSPost[]> {
    return this.MainFormService.getAllPost();
  }

  @Post('/test')
  postTest(@Body() createWSPost):Promise<WSPost>{
    return this.MainFormService.createWSPost(createWSPost);
  }
}
