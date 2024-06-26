/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { TouristLocation } from "./TouristLocation";
import { TouristLocationCountArgs } from "./TouristLocationCountArgs";
import { TouristLocationFindManyArgs } from "./TouristLocationFindManyArgs";
import { TouristLocationFindUniqueArgs } from "./TouristLocationFindUniqueArgs";
import { CreateTouristLocationArgs } from "./CreateTouristLocationArgs";
import { UpdateTouristLocationArgs } from "./UpdateTouristLocationArgs";
import { DeleteTouristLocationArgs } from "./DeleteTouristLocationArgs";
import { TouristLocationService } from "../touristLocation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TouristLocation)
export class TouristLocationResolverBase {
  constructor(
    protected readonly service: TouristLocationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TouristLocation",
    action: "read",
    possession: "any",
  })
  async _touristLocationsMeta(
    @graphql.Args() args: TouristLocationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TouristLocation])
  @nestAccessControl.UseRoles({
    resource: "TouristLocation",
    action: "read",
    possession: "any",
  })
  async touristLocations(
    @graphql.Args() args: TouristLocationFindManyArgs
  ): Promise<TouristLocation[]> {
    return this.service.touristLocations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TouristLocation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TouristLocation",
    action: "read",
    possession: "own",
  })
  async touristLocation(
    @graphql.Args() args: TouristLocationFindUniqueArgs
  ): Promise<TouristLocation | null> {
    const result = await this.service.touristLocation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TouristLocation)
  @nestAccessControl.UseRoles({
    resource: "TouristLocation",
    action: "create",
    possession: "any",
  })
  async createTouristLocation(
    @graphql.Args() args: CreateTouristLocationArgs
  ): Promise<TouristLocation> {
    return await this.service.createTouristLocation({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TouristLocation)
  @nestAccessControl.UseRoles({
    resource: "TouristLocation",
    action: "update",
    possession: "any",
  })
  async updateTouristLocation(
    @graphql.Args() args: UpdateTouristLocationArgs
  ): Promise<TouristLocation | null> {
    try {
      return await this.service.updateTouristLocation({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TouristLocation)
  @nestAccessControl.UseRoles({
    resource: "TouristLocation",
    action: "delete",
    possession: "any",
  })
  async deleteTouristLocation(
    @graphql.Args() args: DeleteTouristLocationArgs
  ): Promise<TouristLocation | null> {
    try {
      return await this.service.deleteTouristLocation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
