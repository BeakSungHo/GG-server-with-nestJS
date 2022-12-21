import { Repository } from 'typeorm';
import { WSPost } from '../Entity/Posts.entity';
export declare class PostRepository extends Repository<WSPost> {
    getPost(): Promise<WSPost[]>;
    getAllPost(): Promise<WSPost[]>;
    getAllImg(): Promise<any>;
    createWSPost(createWSPost: any): Promise<WSPost>;
    testF(): void;
}
