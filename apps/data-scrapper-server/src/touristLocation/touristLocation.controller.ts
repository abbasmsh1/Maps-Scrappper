import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TouristLocationService } from "./touristLocation.service";
import { TouristLocationControllerBase } from "./base/touristLocation.controller.base";

@swagger.ApiTags("touristLocations")
@common.Controller("touristLocations")
export class TouristLocationController extends TouristLocationControllerBase {
  constructor(
    protected readonly service: TouristLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
