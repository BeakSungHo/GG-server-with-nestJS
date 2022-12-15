
import { NotFoundException } from '@nestjs/common';
import { CustomRepository } from 'src/todo_list all/Custom/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { CreateWeatherDto } from '../dto/create-weather_list.dto';
import { WeatherList } from '../entity/weather_entity';
//import { CreateToDoListDto } from '../dto/create-todolist.dto';
//import { TodoList } from '../entity/todo_list.entity';


@CustomRepository(WeatherList)
export class WeatherListRepository extends Repository<WeatherList> {

    async createWeatherList(CreateWeatherDto:CreateWeatherDto):Promise<WeatherList>{
      const{name,latitude,longitude}=CreateWeatherDto;
      const wheader = this.create({
      name,
      latitude,
      longitude
      })
      await this.save(wheader);
      return wheader;
    }

    async getAllWeatherList():Promise<WeatherList[]>{
      const allWeatherList=await this.find();
      return allWeatherList;
    }
    
    async getAllLcoationName():Promise<WeatherList[]>{
      const qb = await this
      .createQueryBuilder('WeatherList')
      .select('WeatherList.name','WeatherList_name');
      
      return qb.getMany()
    }

    async getWeather(CreateWeatherDto:CreateWeatherDto):Promise<any>{
      const {name}=CreateWeatherDto;
      const qb = await this
      .createQueryBuilder('WeatherList')
      .select('WeatherList.longitude','WeatherList_longitude')
      .addSelect('WeatherList.latitude','WeatherList_latitude')
      qb.andWhere('WeatherList.name=:name',{name});
      return this.Weathers(  (await qb.getOne()).latitude,(await qb.getOne()).longitude);
    }
    async Weathers(latitude,longitude){
      const API_KEY ="2fd82d9a978c2adf1404ff93711101a1"
      const weather = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)).json();
      const values:string[]=[weather.weather[0].main,weather.main.temp,weather.name]
      return values;
    }
    


    async updateWeatherList(id:number, CreateWeatherDto:CreateWeatherDto):Promise<WeatherList>{
      const {name,latitude,longitude}=CreateWeatherDto;
      const wheaterList = await this.getWeatherByid(id)
      wheaterList.name=name;
      wheaterList.latitude=latitude;
      wheaterList.longitude=longitude;
      await this.save(wheaterList);
      return wheaterList;
    }

    async getWeatherByname(name: string):Promise<WeatherList>{//해당이름이 있는지 확인하는 함수
      const found = await this.findOne({ where: {name} });
      if (!found) {
        throw new NotFoundException(`현제 등록되지않는 지역 => ${name}`);
      }
      return found;
    }

    async getWeatherByid(id: number):Promise<WeatherList>{//해당아이디가 있는지 확인하는 함수
      const found = await this.findOne({ where: {id} });
      if (!found) {
        throw new NotFoundException(`현제 등록되지않는 지역 => ${id}`);
      }
      return found;
    }
}
