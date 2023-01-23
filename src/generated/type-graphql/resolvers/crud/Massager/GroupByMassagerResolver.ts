import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByMassagerArgs } from "./args/GroupByMassagerArgs";
import { Massager } from "../../../models/Massager";
import { MassagerGroupBy } from "../../outputs/MassagerGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Massager)
export class GroupByMassagerResolver {
  @TypeGraphQL.Query(_returns => [MassagerGroupBy], {
    nullable: false
  })
  async groupByMassager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMassagerArgs): Promise<MassagerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).massager.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
