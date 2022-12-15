import { Test, TestingModule } from '@nestjs/testing';
import { GgmapController } from './ggmap.controller';

describe('GgmapController', () => {
  let controller: GgmapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GgmapController],
    }).compile();

    controller = module.get<GgmapController>(GgmapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
