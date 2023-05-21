import { Injectable } from "@nestjs/common";

import { RedisCacheManagerService } from "../redis-cache-manager/redis-cache-manager.service";

@Injectable()
export class GoApiWrapperService {
  constructor(readonly redisCacheManager: RedisCacheManagerService) {}

  public async getData(ids: string[]) {
    const data = await this.redisCacheManager.getData(ids);

    return data;
  }

  public async setData(data: { key: string; value: string }[]) {
    await this.redisCacheManager.invalidateCache();
    await this.redisCacheManager.setData(data);
  }
}
