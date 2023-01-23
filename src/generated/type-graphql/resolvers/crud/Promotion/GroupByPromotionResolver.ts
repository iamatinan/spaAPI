import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPromotionArgs } from "./args/GroupByPromotionArgs";
import { Promotion } from "../../../models/Promotion";
import { PromotionGroupBy } from "../../outputs/PromotionGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Promotion)
export class GroupByPromotionResolver {
  @TypeGraphQL.Query(_returns => [PromotionGroupBy], {
    nullable: false
  })
  async groupByPromotion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPromotionArgs): Promise<PromotionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).promotion.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
