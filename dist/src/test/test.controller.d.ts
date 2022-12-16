import { TestService } from './test.service';
export declare class TestController {
    private TestFormService;
    constructor(TestFormService: TestService);
    getAllImg(): Promise<string[]>;
}
