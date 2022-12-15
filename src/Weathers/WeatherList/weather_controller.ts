import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather_list.dto';
import { WeatherList } from './entity/weather_entity';
import { WeatherService } from './weather_service';
// import { CreateToDoListDto } from './dto/create-todolist.dto';
// import { TodoList } from './entity/todo_list.entity';
// import { TodoListService } from './todo-list.service';

@Controller('weather-list')
export class WeatherController {
    constructor(private WeatherService:WeatherService){}

    @Get('/all')//저장된 모든 리스트를 불러와서 체크리스트에 추가할예정 
    getAllWeather():Promise<WeatherList[]>{
        return this.WeatherService.getAllWeather();
        }
    @Get('/locationname')//저장된 모든 리스트를 불러와서 체크리스트에 추가할예정 
    getAllLocationName():Promise<WeatherList[]>{
        return this.WeatherService.getAllLocationName();
        }
    @Get('/weather')//저장된 모든 리스트를 불러와서 체크리스트에 추가할예정 
    getWeather(@Body() CreateWeatherDto:CreateWeatherDto):Promise<any>{
        return this.WeatherService.getWeather(CreateWeatherDto);
        }


    @Patch("/:id/")
    @UsePipes(ValidationPipe)
    updateWeatherList(
        @Param('id')id:number,
        @Body() CreateWeatherDto:CreateWeatherDto):Promise<WeatherList>
    {
        return this.WeatherService.updateWeatherStatus(id,CreateWeatherDto)
    }

    @Post("/namesave")
    @UsePipes(ValidationPipe)
    creatWeatherList(@Body() CreateWeatherDto:CreateWeatherDto):Promise<WeatherList>{
        return this.WeatherService.createWeather(CreateWeatherDto)
    }

}


