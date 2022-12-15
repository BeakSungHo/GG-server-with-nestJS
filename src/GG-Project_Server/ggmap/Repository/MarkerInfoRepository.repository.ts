//import { CustomRepository } from 'src/Custom/typeorm-ex.decorator';
import { CustomRepository } from 'src/GG-Project_Server/Custom/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { MarkerInfo } from '../Entity/MarkerInfo.entity';

@CustomRepository(MarkerInfo)
export class MarkerInfoRepository extends Repository<MarkerInfo> {
            
    async createMarkerInfo(createMarkerInfo):Promise<MarkerInfo>{
        const {imgName,text}=createMarkerInfo
        const wspost=this.create({
            imgName,
            text,
        })
        await this.save(wspost);

        return wspost;
    }
    
}

