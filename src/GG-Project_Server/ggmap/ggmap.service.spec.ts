import { Test, TestingModule } from '@nestjs/testing';
import { GgmapService } from './ggmap.service';

describe('GgmapService', () => {
  let service: GgmapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GgmapService],
    }).compile();

    service = module.get<GgmapService>(GgmapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
