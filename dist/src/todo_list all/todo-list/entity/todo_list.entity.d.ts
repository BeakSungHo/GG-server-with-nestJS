import { BaseEntity } from 'typeorm';
export declare class TodoList extends BaseEntity {
    id: number;
    text: string;
    done: boolean;
}
