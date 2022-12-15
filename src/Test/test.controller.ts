import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private TestFormService : TestService){}

    @Get('/getimag')
    getAllImg():Promise<string[]>{
      return this.TestFormService.getphone();
    }




}
