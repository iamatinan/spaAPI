import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByRecive_serviceArgs } from "./args/GroupByRecive_serviceArgs";
import { Recive_service } from "../../../models/Recive_service";
import { Recive_serviceGroupBy } from "../../outputs/Recive_serviceGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recive_service)
export class GroupByRecive_serviceResolver {
  @TypeGraphQL.Query(_returns => [Recive_serviceGroupBy], {
    nullable: false
  })
  async groupByRecive_service(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRecive_serviceArgs): Promise<Recive_serviceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).recive_service.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
