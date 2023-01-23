import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateRecive_serviceArgs } from "./args/UpdateRecive_serviceArgs";
import { Recive_service } from "../../../models/Recive_service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recive_service)
export class UpdateRecive_serviceResolver {
  @TypeGraphQL.Mutation(_returns => Recive_service, {
    nullable: true
  })
  async updateRecive_service(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateRecive_serviceArgs): Promise<Recive_service | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).recive_service.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
