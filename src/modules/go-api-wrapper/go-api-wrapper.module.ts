import { Module } from "@nestjs/common";

import { RedisCacheManagerModule } from "../redis-cache-manager/redis-cache-manager.module";
import { GoApiWrapperController } from "./go-api-wrapper.controller";
import { GoApiWrapperService } from "./go-api-wrapper.service";

@Module({
  imports: [RedisCacheManagerModule],
  providers: [GoApiWrapperService],
  controllers: [GoApiWrapperController],
})
export class GoApiWrapperModule {}
