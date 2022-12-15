import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarkerInfo } from './Entity/MarkerInfo.entity';
import { GgmapService } from './ggmap.service';

@Controller('ggmap')
export class GgmapController {
  constructor(private GgmapService:GgmapService ){}

    @Get('/')
    getmap():Promise<string[]>{
      return ;
    }
    @Post('/')
    Postmap():Promise<string[]>{
      return ;
    }
    
  @Post('/test')
  createMarkerInfo(@Body() createMarkerInfo):Promise<MarkerInfo>{
    return this.GgmapService.createMarkerInfo(createMarkerInfo);
  }
    
}
