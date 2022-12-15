import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class MarkerInfo extends BaseEntity {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imgName: string;

  @Column()
  text: string;

  @Column('real')
  latitude: number;

  @Column('real')
  longtitude: number;
}