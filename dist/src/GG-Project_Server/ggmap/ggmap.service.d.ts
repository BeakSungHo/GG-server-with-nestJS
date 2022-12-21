import { MarkerInfo } from './Entity/MarkerInfo.entity';
import { MarkerInfoRepository } from './Repository/MarkerInfoRepository.repository';
export declare class GgmapService {
    private MarkerInfoRepository;
    constructor(MarkerInfoRepository: MarkerInfoRepository);
    createMarkerInfo(createMarkerInfo: any): Promise<MarkerInfo>;
    getMarkerInfo(getID: any): Promise<MarkerInfo>;
    getAllMarkerInfo(): Promise<MarkerInfo[]>;
}
