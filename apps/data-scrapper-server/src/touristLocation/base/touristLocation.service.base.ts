/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  TouristLocation as PrismaTouristLocation,
} from "@prisma/client";

export class TouristLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TouristLocationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.touristLocation.count(args);
  }

  async touristLocations<T extends Prisma.TouristLocationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TouristLocationFindManyArgs>
  ): Promise<PrismaTouristLocation[]> {
    return this.prisma.touristLocation.findMany<Prisma.TouristLocationFindManyArgs>(
      args
    );
  }
  async touristLocation<T extends Prisma.TouristLocationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TouristLocationFindUniqueArgs>
  ): Promise<PrismaTouristLocation | null> {
    return this.prisma.touristLocation.findUnique(args);
  }
  async createTouristLocation<T extends Prisma.TouristLocationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TouristLocationCreateArgs>
  ): Promise<PrismaTouristLocation> {
    return this.prisma.touristLocation.create<T>(args);
  }
  async updateTouristLocation<T extends Prisma.TouristLocationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TouristLocationUpdateArgs>
  ): Promise<PrismaTouristLocation> {
    return this.prisma.touristLocation.update<T>(args);
  }
  async deleteTouristLocation<T extends Prisma.TouristLocationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TouristLocationDeleteArgs>
  ): Promise<PrismaTouristLocation> {
    return this.prisma.touristLocation.delete(args);
  }
}
