import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()//지도에 마크에대한 정보를 넣는 작업 이하동문으로 관리자 수정을 위해 생성 
export class MarkerInfo extends BaseEntity {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  key: number;

  @Column()
  imgName: string;
    //https://wsggbucket.s3.ap-northeast-2.amazonaws.com/bori.jpg 의 이름이 키값이 됨 imgName=(key : bori)
    //파싱할경우https://wsggbucket.s3.ap-northeast-2.amazonaws.com/{imgName?}.jpg
  @Column()
  text: string;
}
