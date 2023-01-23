import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateHistory_serviceArgs } from "./args/UpdateHistory_serviceArgs";
import { History_service } from "../../../models/History_service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => History_service)
export class UpdateHistory_serviceResolver {
  @TypeGraphQL.Mutation(_returns => History_service, {
    nullable: true
  })
  async updateHistory_service(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateHistory_serviceArgs): Promise<History_service | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).history_service.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
