import{Entity,BaseEntity,PrimaryGeneratedColumn,Column} from 'typeorm'


@Entity()
export class TodoList extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    text :string
    @Column()
    done :boolean
}