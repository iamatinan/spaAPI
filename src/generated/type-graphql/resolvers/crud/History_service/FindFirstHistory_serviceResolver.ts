import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstHistory_serviceArgs } from "./args/FindFirstHistory_serviceArgs";
import { History_service } from "../../../models/History_service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => History_service)
export class FindFirstHistory_serviceResolver {
  @TypeGraphQL.Query(_returns => History_service, {
    nullable: true
  })
  async findFirstHistory_service(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstHistory_serviceArgs): Promise<History_service | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).history_service.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
