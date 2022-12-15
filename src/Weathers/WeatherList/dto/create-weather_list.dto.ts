import { IsNotEmpty } from 'class-validator';
//지역을 추가하기위한 보조
//일딴 만들어둠

export class CreateWeatherDto{
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    latitude:number
    @IsNotEmpty()
    longitude:number
}