import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '../Custom/typeorm-ex.module';
import { PostRepository } from '../main-form/Repository/Posts.repository';
import { GgmapController } from './ggmap.controller';
import { GgmapService } from './ggmap.service';
import { MarkerInfoRepository } from './Repository/MarkerInfoRepository.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([MarkerInfoRepository])],
  controllers: [GgmapController],
  providers: [GgmapService]
})
export class GgmapModule {}
