import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TouristLocationResolverBase } from "./base/touristLocation.resolver.base";
import { TouristLocation } from "./base/TouristLocation";
import { TouristLocationService } from "./touristLocation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TouristLocation)
export class TouristLocationResolver extends TouristLocationResolverBase {
  constructor(
    protected readonly service: TouristLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
