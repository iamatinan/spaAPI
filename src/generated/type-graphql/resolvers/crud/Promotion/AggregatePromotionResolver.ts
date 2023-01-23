import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePromotionArgs } from "./args/AggregatePromotionArgs";
import { Promotion } from "../../../models/Promotion";
import { AggregatePromotion } from "../../outputs/AggregatePromotion";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Promotion)
export class AggregatePromotionResolver {
  @TypeGraphQL.Query(_returns => AggregatePromotion, {
    nullable: false
  })
  async aggregatePromotion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePromotionArgs): Promise<AggregatePromotion> {
    return getPrismaFromContext(ctx).promotion.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
