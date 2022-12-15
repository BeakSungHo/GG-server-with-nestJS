import { CreateWeatherDto } from './dto/create-weather_list.dto';
import { WeatherList } from './entity/weather_entity';
import { WeatherListRepository } from './Repository/todolist.repository';
export declare class WeatherService {
    private weatherRepository;
    constructor(weatherRepository: WeatherListRepository);
    getAllWeather(): Promise<WeatherList[]>;
    getAllLocationName(): Promise<WeatherList[]>;
    getWeather(CreateWeatherDto: CreateWeatherDto): Promise<any>;
    createWeather(CreateWeatherDto: CreateWeatherDto): Promise<WeatherList>;
    updateWeatherStatus(id: number, CreateWeatherDto: CreateWeatherDto): Promise<WeatherList>;
}
