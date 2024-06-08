/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HotelService } from "../hotel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HotelCreateInput } from "./HotelCreateInput";
import { Hotel } from "./Hotel";
import { HotelFindManyArgs } from "./HotelFindManyArgs";
import { HotelWhereUniqueInput } from "./HotelWhereUniqueInput";
import { HotelUpdateInput } from "./HotelUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HotelControllerBase {
  constructor(
    protected readonly service: HotelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hotel })
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHotel(@common.Body() data: HotelCreateInput): Promise<Hotel> {
    return await this.service.createHotel({
      data: data,
      select: {
        availableOffers: true,
        createdAt: true,
        description: true,
        id: true,
        latitude: true,
        location: true,
        longitude: true,
        mapsUrl: true,
        name: true,
        pictures: true,
        pricing: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Hotel] })
  @ApiNestedQuery(HotelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hotels(@common.Req() request: Request): Promise<Hotel[]> {
    const args = plainToClass(HotelFindManyArgs, request.query);
    return this.service.hotels({
      ...args,
      select: {
        availableOffers: true,
        createdAt: true,
        description: true,
        id: true,
        latitude: true,
        location: true,
        longitude: true,
        mapsUrl: true,
        name: true,
        pictures: true,
        pricing: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hotel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hotel(
    @common.Param() params: HotelWhereUniqueInput
  ): Promise<Hotel | null> {
    const result = await this.service.hotel({
      where: params,
      select: {
        availableOffers: true,
        createdAt: true,
        description: true,
        id: true,
        latitude: true,
        location: true,
        longitude: true,
        mapsUrl: true,
        name: true,
        pictures: true,
        pricing: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Hotel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHotel(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() data: HotelUpdateInput
  ): Promise<Hotel | null> {
    try {
      return await this.service.updateHotel({
        where: params,
        data: data,
        select: {
          availableOffers: true,
          createdAt: true,
          description: true,
          id: true,
          latitude: true,
          location: true,
          longitude: true,
          mapsUrl: true,
          name: true,
          pictures: true,
          pricing: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Hotel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHotel(
    @common.Param() params: HotelWhereUniqueInput
  ): Promise<Hotel | null> {
    try {
      return await this.service.deleteHotel({
        where: params,
        select: {
          availableOffers: true,
          createdAt: true,
          description: true,
          id: true,
          latitude: true,
          location: true,
          longitude: true,
          mapsUrl: true,
          name: true,
          pictures: true,
          pricing: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}