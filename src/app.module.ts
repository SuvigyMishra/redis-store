import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GoApiWrapperModule } from "./modules/go-api-wrapper/go-api-wrapper.module";



@Module({
  imports: [GoApiWrapperModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
