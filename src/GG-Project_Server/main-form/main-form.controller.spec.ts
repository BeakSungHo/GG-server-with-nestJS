import { Test, TestingModule } from '@nestjs/testing';
import { MainFormController } from './main-form.controller';

describe('MainFormController', () => {
  let controller: MainFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainFormController],
    }).compile();

    controller = module.get<MainFormController>(MainFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
