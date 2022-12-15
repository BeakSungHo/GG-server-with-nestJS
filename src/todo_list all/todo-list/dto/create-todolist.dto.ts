import { IsNotEmpty } from 'class-validator';



export class CreateToDoListDto{
    @IsNotEmpty()
    text:string;
    @IsNotEmpty()
    done:boolean;
}