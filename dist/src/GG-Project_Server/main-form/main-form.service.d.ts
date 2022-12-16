import { WSPost } from './Entity/Posts.entity';
import { PostRepository } from './Repository/Posts.repository';
export declare class MainFormService {
    private postRepository;
    constructor(postRepository: PostRepository);
    getPost(): Promise<WSPost[]>;
    getAllPost(): Promise<WSPost[]>;
    getAllImg(): Promise<string[]>;
    get심심이(): Promise<string[]>;
    createWSPost(createWSPost: any): Promise<WSPost>;
}
