import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { redisStore } from "cache-manager-redis-store";
import { RedisClientOptions } from "redis";

import { RedisCacheManagerService } from "./redis-cache-manager.service";

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      host: "localhost",
      port: 6379,
    }),
  ],
  providers: [RedisCacheManagerService],
  exports: [RedisCacheManagerService],
})
export class RedisCacheManagerModule {}
