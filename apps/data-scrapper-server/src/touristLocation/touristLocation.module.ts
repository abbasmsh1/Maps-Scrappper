import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TouristLocationModuleBase } from "./base/touristLocation.module.base";
import { TouristLocationService } from "./touristLocation.service";
import { TouristLocationController } from "./touristLocation.controller";
import { TouristLocationResolver } from "./touristLocation.resolver";

@Module({
  imports: [TouristLocationModuleBase, forwardRef(() => AuthModule)],
  controllers: [TouristLocationController],
  providers: [TouristLocationService, TouristLocationResolver],
  exports: [TouristLocationService],
})
export class TouristLocationModule {}
