import { Injectable } from '@nestjs/common';
import { MarkerInfo } from './Entity/MarkerInfo.entity';
import { MarkerInfoRepository } from './Repository/MarkerInfoRepository.repository';
import { MarkerRepository } from './Repository/MarkerRepository.repository';

@Injectable()
export class GgmapService {
constructor(private MarkerInfoRepository:MarkerInfoRepository
            ,private MarkerRepository:MarkerRepository){}

    createMarkerInfo(createMarkerInfo:any): Promise<MarkerInfo> {
        return this.MarkerInfoRepository.createMarkerInfo(createMarkerInfo);
    }

}
