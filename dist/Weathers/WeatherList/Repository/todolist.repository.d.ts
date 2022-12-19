import { Repository } from 'typeorm';
import { CreateWeatherDto } from '../dto/create-weather_list.dto';
import { WeatherList } from '../entity/weather_entity';
export declare class WeatherListRepository extends Repository<WeatherList> {
    createWeatherList(CreateWeatherDto: CreateWeatherDto): Promise<WeatherList>;
    getAllWeatherList(): Promise<WeatherList[]>;
    getAllLcoationName(): Promise<WeatherList[]>;
    getWeather(CreateWeatherDto: CreateWeatherDto): Promise<any>;
    Weathers(latitude: any, longitude: any): Promise<string[]>;
    updateWeatherList(id: number, CreateWeatherDto: CreateWeatherDto): Promise<WeatherList>;
    getWeatherByname(name: string): Promise<WeatherList>;
    getWeatherByid(id: number): Promise<WeatherList>;
}
