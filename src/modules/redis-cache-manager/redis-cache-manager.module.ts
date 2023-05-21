import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { redisStore } from "cache-manager-redis-store";
import { RedisClientOptions } from "redis";

import { RedisCacheMangerService } from "./redis-cache-manager.service";

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      host: "localhost",
      port: 6379,
    }),
  ],
  providers: [RedisCacheMangerService],
  exports: [RedisCacheMangerService],
})
export class RedisCacheManagerModule {}
