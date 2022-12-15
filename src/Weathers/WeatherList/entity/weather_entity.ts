import{Entity,BaseEntity,PrimaryGeneratedColumn,Column, Double} from 'typeorm'


@Entity()
export class WeatherList extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name: string; //지역 이름
    @Column('real')
    latitude: number//지역좌표 위도
    @Column('real')
    longitude: number//지역좌표 경도


}