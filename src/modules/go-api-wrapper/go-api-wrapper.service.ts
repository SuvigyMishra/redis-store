import { Injectable } from "@nestjs/common";

import { RedisCacheMangerService } from "../redis-cache-manager/redis-cache-manager.service";

@Injectable()
export class GoApiWrapperService {
  constructor(readonly redisCacheManager: RedisCacheMangerService) {}

  public async getData(ids: string[]) {
    const data = await this.redisCacheManager.getData(ids);

    return data;
  }

  public async setData(data: { key: string; value: string }[]) {
    await this.redisCacheManager.invalidateCache();
    await this.redisCacheManager.setCache(data);
  }
}
