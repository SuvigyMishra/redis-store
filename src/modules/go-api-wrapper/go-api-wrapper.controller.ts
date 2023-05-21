import { Controller, Get, Post } from "@nestjs/common";

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

  @Post("/set-data")
  async setData() {
    const data = [];
    for (let index = 0; index < 12; index++) {
      data.push({
        key: index + "",
        value: index + "",
      });
    }

    await this.goApiWrapperService.setData(data);

    return "Added value";
  }
}
