//import { CustomRepository } from 'src/Custom/typeorm-ex.decorator';
import { NotFoundException } from '@nestjs/common';
import { CustomRepository } from 'src/GG-Project_Server/Custom/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { MarkerInfo } from '../Entity/MarkerInfo.entity';

@CustomRepository(MarkerInfo)
export class MarkerInfoRepository extends Repository<MarkerInfo> {
            
    async createMarkerInfo(createMarkerInfo):Promise<MarkerInfo>{
        const {title,imgName,text,latitude,longtitude}=createMarkerInfo
        const wspost=this.create({
            title,
            imgName,
            text,
            latitude,
            longtitude,

        })
        await this.save(wspost);

        return wspost;
    }

    async getMarkerInfo(getID):Promise<MarkerInfo>{
        const {id}=getID
        const MarkerInfo =await this.getMarkerInfoBykey(id)
        MarkerInfo.imgName=`https://wsggbucket.s3.ap-northeast-2.amazonaws.com/${MarkerInfo.imgName}`;

        return MarkerInfo;
    }

    async getAllMarkerInfo():Promise<MarkerInfo[]>{
        const allMarkerInfoList=await this.find();

        return allMarkerInfoList;
    }


    async getMarkerInfoBykey(id: number):Promise<MarkerInfo>{//해당아이디가 있는지 확인하는 함수
        const found = await this.findOne({ where: {id} });
        if (!found) {
          throw new NotFoundException(`현재 등록되지않는 마크 => ${id}`);
        }
        return found;
      }
    
}

