import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
//메인의 포스트(글귀를 표기하기 위한 용도 [관리자 용도로 데이터베이스 필요])
export class WSPost extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imgName: string;
  //https://wsggbucket.s3.ap-northeast-2.amazonaws.com/bori.jpg 의 이름이 키값이 됨 (key : bori)

  @Column()
  description: string;
}
