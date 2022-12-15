import { Injectable } from '@nestjs/common';
import { MarkerInfo } from './Entity/MarkerInfo.entity';
import { MarkerInfoRepository} from './Repository/MarkerInfoRepository.repository';

@Injectable()
export class GgmapService {
constructor(private MarkerInfoRepository:MarkerInfoRepository){}

    createMarkerInfo(createMarkerInfo:any): Promise<MarkerInfo> {
        return this.MarkerInfoRepository.createMarkerInfo(createMarkerInfo);
    }
    getMarkerInfo(getID:any):Promise<MarkerInfo>{
        return this.MarkerInfoRepository.getMarkerInfo(getID)
    }
    getAllMarkerInfo():Promise<MarkerInfo[]>{
        return this.MarkerInfoRepository.getAllMarkerInfo();
    }

}
