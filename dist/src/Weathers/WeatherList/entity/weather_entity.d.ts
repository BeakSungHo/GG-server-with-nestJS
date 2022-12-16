import { BaseEntity } from 'typeorm';
export declare class WeatherList extends BaseEntity {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}
