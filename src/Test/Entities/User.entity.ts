import { IsString, MaxLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @IsString() //해당 id의 타입은 string
  @PrimaryGeneratedColumn('uuid', { comment: 'uuid' }) // primarykey이고 해당 유저를 만들때 생성 @Column 데코레이터를 포함
  id: string;

  @UpdateDateColumn({ comment: 'last update datetime' })// 마지막으로 업데이트될 때의 시간이 값이 됨 @Column 데코레이터를 포함
  updatedAt: Date;

  @CreateDateColumn({ comment: 'insert datetime' }) // 해당 유저가 처음 생성될 때의  시간이 값이 됨 @Column 데코레이터를 포함
  createdAt: Date;

  @Column({ length: 20 }) // 테이블에서의 컬럼임을 나타내는 데코레이터, 최대 길이 20
  @IsString() 
  @MaxLength(20) // 최대 길이가 20이 넘으면 error
  name: string;
}