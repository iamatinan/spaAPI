import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByHistory_serviceArgs } from "./args/GroupByHistory_serviceArgs";
import { History_service } from "../../../models/History_service";
import { History_serviceGroupBy } from "../../outputs/History_serviceGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => History_service)
export class GroupByHistory_serviceResolver {
  @TypeGraphQL.Query(_returns => [History_serviceGroupBy], {
    nullable: false
  })
  async groupByHistory_service(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByHistory_serviceArgs): Promise<History_serviceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).history_service.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
