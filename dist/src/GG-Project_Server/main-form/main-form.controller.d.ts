import { WSPost } from './Entity/Posts.entity';
import { MainFormService } from './main-form.service';
export declare class MainFormController {
    private MainFormService;
    constructor(MainFormService: MainFormService);
    getPost(): Promise<WSPost[]>;
    getAllImg(): Promise<string[]>;
    getTest(): Promise<WSPost[]>;
    get심심이(): Promise<string[]>;
    postTest(createWSPost: any): Promise<WSPost>;
}
