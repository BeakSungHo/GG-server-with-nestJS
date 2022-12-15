import { Repository } from 'typeorm';
import { MarkerInfo } from '../Entity/MarkerInfo.entity';
export declare class MarkerInfoRepository extends Repository<MarkerInfo> {
    createMarkerInfo(createMarkerInfo: any): Promise<MarkerInfo>;
    getMarkerInfo(getID: any): Promise<MarkerInfo>;
    getAllMarkerInfo(): Promise<MarkerInfo[]>;
    getMarkerInfoBykey(key: number): Promise<MarkerInfo>;
}
