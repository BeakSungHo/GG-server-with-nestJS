import { Module } from '@nestjs/common';
import { GgmapController } from './ggmap.controller';
import { GgmapService } from './ggmap.service';

@Module({
  controllers: [GgmapController],
  providers: [GgmapService]
})
export class GgmapModule {}
