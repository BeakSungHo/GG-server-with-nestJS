import { CreateWeatherDto } from './dto/create-weather_list.dto';
import { WeatherList } from './entity/weather_entity';
import { WeatherService } from './weather_service';
export declare class WeatherController {
    private WeatherService;
    constructor(WeatherService: WeatherService);
    getAllWeather(): Promise<WeatherList[]>;
    getAllLocationName(): Promise<WeatherList[]>;
    getWeather(CreateWeatherDto: CreateWeatherDto): Promise<any>;
    updateWeatherList(id: number, CreateWeatherDto: CreateWeatherDto): Promise<WeatherList>;
    creatWeatherList(CreateWeatherDto: CreateWeatherDto): Promise<WeatherList>;
}
