/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HotelWhereInput } from "./HotelWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HotelListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HotelWhereInput,
  })
  @ValidateNested()
  @Type(() => HotelWhereInput)
  @IsOptional()
  @Field(() => HotelWhereInput, {
    nullable: true,
  })
  every?: HotelWhereInput;

  @ApiProperty({
    required: false,
    type: () => HotelWhereInput,
  })
  @ValidateNested()
  @Type(() => HotelWhereInput)
  @IsOptional()
  @Field(() => HotelWhereInput, {
    nullable: true,
  })
  some?: HotelWhereInput;

  @ApiProperty({
    required: false,
    type: () => HotelWhereInput,
  })
  @ValidateNested()
  @Type(() => HotelWhereInput)
  @IsOptional()
  @Field(() => HotelWhereInput, {
    nullable: true,
  })
  none?: HotelWhereInput;
}
export { HotelListRelationFilter as HotelListRelationFilter };
