import { Test, TestingModule } from '@nestjs/testing';
import { MainFormService } from './main-form.service';

describe('MainFormService', () => {
  let service: MainFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainFormService],
    }).compile();

    service = module.get<MainFormService>(MainFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
