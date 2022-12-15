import { BaseEntity } from 'typeorm';
export declare class MarkerInfo extends BaseEntity {
    id: number;
    title: string;
    imgName: string;
    text: string;
    latitude: number;
    longtitude: number;
}
