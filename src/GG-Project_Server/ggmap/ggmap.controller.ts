import { Controller, Get } from '@nestjs/common';

@Controller('ggmap')
export class GgmapController {
    @Get('/')
    getmap():Promise<string[]>{
      return ;
    }
    
}
