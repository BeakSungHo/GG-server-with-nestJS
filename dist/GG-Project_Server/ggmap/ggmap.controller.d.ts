import { MarkerInfo } from './Entity/MarkerInfo.entity';
import { GgmapService } from './ggmap.service';
export declare class GgmapController {
    private GgmapService;
    constructor(GgmapService: GgmapService);
    getmap(): string;
    getMarkerInfo(getID: any): Promise<MarkerInfo>;
    getAllMarkerInfo(): Promise<MarkerInfo[]>;
    createMarkerInfo(createMarkerInfo: any): Promise<MarkerInfo>;
}
