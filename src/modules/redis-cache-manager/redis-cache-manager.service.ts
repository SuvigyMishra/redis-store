import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";

@Injectable()
export class RedisCacheManagerService {
  constructor(@Inject(CACHE_MANAGER) readonly cacheManager: Cache) {}

  public async getData<T>(keys: string[]) {
    const data = await this.cacheManager.store.mget(...keys);

    const response: Record<string, T> = {};
    for (let index = 0; index < keys.length; index++) {
      response[keys[index]] = data[index] as T;
    }

    return response;
  }

  public async getKeys(pattern: string) {
    return await this.cacheManager.store.keys("businessPartner_.*");
  }

  public async setData(data: { key: string; value: any }[]) {
    //TODO: Make mset work
    for (let entity of data) {
      await this.cacheManager.set(entity.key, entity.value);
    }
  }

  public async setCache(data: { key: string; value: any }[]) {
    console.log(
      `%c[data]`,
      "font-weight: bold; color: red",
      data.map(({ key, value }) => [key, value])
    );
    const args: [string, any][] = data.map(({ key, value }) => [key, value]);

    await this.cacheManager.store.mset(
      [
        ["0", "0"],
        ["2", {}],
      ],
      5 * 1000
    );
  }

  public async invalidateCache() {
    await this.cacheManager.reset();
  }
}
