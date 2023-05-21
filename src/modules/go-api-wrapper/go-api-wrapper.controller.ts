import { Controller, Get, Param, Post } from "@nestjs/common";

import { GoApiWrapperService } from "./go-api-wrapper.service";

@Controller()
export class GoApiWrapperController {
  constructor(private readonly goApiWrapperService: GoApiWrapperService) {}

  @Get("/get-data")
  async getData() {
    const ids: string[] = [];

    for (let index = 0; index < 12000; index++) {
      ids.push(index + "");
    }

    return await this.goApiWrapperService.getData(ids);
  }

  @Get("/get-data/:pattern")
  async getDataByPattern(@Param("pattern") pattern: string) {
    return await this.goApiWrapperService.redisCacheManager.getKeys(pattern);
  }

  @Post("/set-data")
  async setData() {
    const data = [
      { key: "businessPartner_1", value: "bp1ID" },
      { key: "bank_1", value: "bank1ID" },
    ];

    await this.goApiWrapperService.setData(data);

    return "Added value";
  }
}
