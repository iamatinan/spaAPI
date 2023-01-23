import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueHistory_serviceArgs } from "./args/FindUniqueHistory_serviceArgs";
import { History_service } from "../../../models/History_service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => History_service)
export class FindUniqueHistory_serviceResolver {
  @TypeGraphQL.Query(_returns => History_service, {
    nullable: true
  })
  async history_service(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueHistory_serviceArgs): Promise<History_service | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).history_service.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
