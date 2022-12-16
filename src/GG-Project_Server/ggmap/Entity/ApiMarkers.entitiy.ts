import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()//지도에 마커와 킥밧을 저장하기 위한 용도 키값은 기본키로 관계형성에 사용될예정
export class ApiMarkers extends BaseEntity {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  key: number;

  @Column()
  apiAddr: string;

  @Column('real')//좌표값으로 더블형으로 타입 real(long duble과 유사 타입 )
  x: number;

  @Column('real')
  y: number;
}
