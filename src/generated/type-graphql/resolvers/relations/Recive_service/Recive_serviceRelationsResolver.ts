import * as TypeGraphQL from "type-graphql";
import { Appointment } from "../../../models/Appointment";
import { Custommer } from "../../../models/Custommer";
import { Massager } from "../../../models/Massager";
import { Product } from "../../../models/Product";
import { Promotion } from "../../../models/Promotion";
import { Receipt } from "../../../models/Receipt";
import { Recive_service } from "../../../models/Recive_service";
import { Service } from "../../../models/Service";
import { Recive_serviceProductArgs } from "./args/Recive_serviceProductArgs";
import { Recive_servicePromotionArgs } from "./args/Recive_servicePromotionArgs";
import { Recive_serviceServiceArgs } from "./args/Recive_serviceServiceArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recive_service)
export class Recive_serviceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Appointment, {
    nullable: false
  })
  async appointment(@TypeGraphQL.Root() recive_service: Recive_service, @TypeGraphQL.Ctx() ctx: any): Promise<Appointment> {
    return getPrismaFromContext(ctx).recive_service.findUnique({
      where: {
        id: recive_service.id,
      },
    }).appointment({});
  }

  @TypeGraphQL.FieldResolver(_type => Custommer, {
    nullable: false
  })
  async customer(@TypeGraphQL.Root() recive_service: Recive_service, @TypeGraphQL.Ctx() ctx: any): Promise<Custommer> {
    return getPrismaFromContext(ctx).recive_service.findUnique({
      where: {
        id: recive_service.id,
      },
    }).customer({});
  }

  @TypeGraphQL.FieldResolver(_type => Massager, {
    nullable: false
  })
  async massager(@TypeGraphQL.Root() recive_service: Recive_service, @TypeGraphQL.Ctx() ctx: any): Promise<Massager> {
    return getPrismaFromContext(ctx).recive_service.findUnique({
      where: {
        id: recive_service.id,
      },
    }).massager({});
  }

  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: false
  })
  async product(@TypeGraphQL.Root() recive_service: Recive_service, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Recive_serviceProductArgs): Promise<Product[]> {
    return getPrismaFromContext(ctx).recive_service.findUnique({
      where: {
        id: recive_service.id,
      },
    }).product(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Promotion], {
    nullable: false
  })
  async promotion(@TypeGraphQL.Root() recive_service: Recive_service, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Recive_servicePromotionArgs): Promise<Promotion[]> {
    return getPrismaFromContext(ctx).recive_service.findUnique({
      where: {
        id: recive_service.id,
      },
    }).promotion(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Service], {
    nullable: false
  })
  async service(@TypeGraphQL.Root() recive_service: Recive_service, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Recive_serviceServiceArgs): Promise<Service[]> {
    return getPrismaFromContext(ctx).recive_service.findUnique({
      where: {
        id: recive_service.id,
      },
    }).service(args);
  }

  @TypeGraphQL.FieldResolver(_type => Receipt, {
    nullable: true
  })
  async receipt(@TypeGraphQL.Root() recive_service: Recive_service, @TypeGraphQL.Ctx() ctx: any): Promise<Receipt | null> {
    return getPrismaFromContext(ctx).recive_service.findUnique({
      where: {
        id: recive_service.id,
      },
    }).receipt({});
  }
}
