import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarkerInfo } from './Entity/MarkerInfo.entity';
import { GgmapService } from './ggmap.service';

@Controller('ggmap')
export class GgmapController {
  constructor(private GgmapService:GgmapService ){}

    @Get('/')
    getmap(){
      return "에러뜨면 옥상으로 따라와!!🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬ㅍ";
    }
    @Get('/comeonbaby')
    getMarkerInfo(@Body() getID):Promise<MarkerInfo>{
      return this.GgmapService.getMarkerInfo(getID);
    }
    //
    @Get('/test')
    getAllMarkerInfo():Promise<MarkerInfo[]>{
      return this.GgmapService.getAllMarkerInfo();
    }

    @Post('/test')
    createMarkerInfo(@Body() createMarkerInfo):Promise<MarkerInfo>{
      return this.GgmapService.createMarkerInfo(createMarkerInfo);
    }
    
}
