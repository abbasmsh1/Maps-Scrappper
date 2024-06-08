import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HotelModuleBase } from "./base/hotel.module.base";
import { HotelService } from "./hotel.service";
import { HotelController } from "./hotel.controller";
import { HotelResolver } from "./hotel.resolver";

@Module({
  imports: [HotelModuleBase, forwardRef(() => AuthModule)],
  controllers: [HotelController],
  providers: [HotelService, HotelResolver],
  exports: [HotelService],
})
export class HotelModule {}
