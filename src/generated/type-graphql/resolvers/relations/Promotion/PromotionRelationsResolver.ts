import * as TypeGraphQL from "type-graphql";
import { Promotion } from "../../../models/Promotion";
import { Recive_service } from "../../../models/Recive_service";
import { PromotionRecive_serviceArgs } from "./args/PromotionRecive_serviceArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Promotion)
export class PromotionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Recive_service], {
    nullable: false
  })
  async recive_service(@TypeGraphQL.Root() promotion: Promotion, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PromotionRecive_serviceArgs): Promise<Recive_service[]> {
    return getPrismaFromContext(ctx).promotion.findUnique({
      where: {
        id: promotion.id,
      },
    }).recive_service(args);
  }
}
