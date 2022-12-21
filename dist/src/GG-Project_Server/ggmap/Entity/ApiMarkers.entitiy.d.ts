import { BaseEntity } from 'typeorm';
export declare class ApiMarkers extends BaseEntity {
    key: number;
    apiAddr: string;
    x: number;
    y: number;
}
