import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCustommerArgs } from "./args/GroupByCustommerArgs";
import { Custommer } from "../../../models/Custommer";
import { CustommerGroupBy } from "../../outputs/CustommerGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Custommer)
export class GroupByCustommerResolver {
  @TypeGraphQL.Query(_returns => [CustommerGroupBy], {
    nullable: false
  })
  async groupByCustommer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCustommerArgs): Promise<CustommerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).custommer.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
