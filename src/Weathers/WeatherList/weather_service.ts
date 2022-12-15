import { Injectable } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather_list.dto';
import { WeatherList } from './entity/weather_entity';
import { WeatherListRepository } from './Repository/todolist.repository';
// import { CreateToDoListDto } from './dto/create-todolist.dto';
// import { TodoList } from './entity/todo_list.entity';
// import { ToDoListRepository } from './Repository/todolist.repository';

@Injectable()
export class WeatherService {
    constructor(private weatherRepository: WeatherListRepository,
                ) {}

    
    getAllWeather():Promise<WeatherList[]>{
        return this.weatherRepository.getAllWeatherList();
    }

    getAllLocationName():Promise<WeatherList[]>{
        return this.weatherRepository.getAllLcoationName();

    }
    getWeather(CreateWeatherDto:CreateWeatherDto):Promise<any>{
        return this.weatherRepository.getWeather(CreateWeatherDto);
    }


    createWeather(CreateWeatherDto:CreateWeatherDto):Promise<WeatherList>{
        return this.weatherRepository.createWeatherList(CreateWeatherDto);
    }
    updateWeatherStatus(id:number,CreateWeatherDto:CreateWeatherDto):Promise<WeatherList>{
        return this.weatherRepository.updateWeatherList(id,CreateWeatherDto);
    }
    
}

