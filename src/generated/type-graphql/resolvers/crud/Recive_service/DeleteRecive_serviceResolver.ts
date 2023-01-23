import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteRecive_serviceArgs } from "./args/DeleteRecive_serviceArgs";
import { Recive_service } from "../../../models/Recive_service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recive_service)
export class DeleteRecive_serviceResolver {
  @TypeGraphQL.Mutation(_returns => Recive_service, {
    nullable: true
  })
  async deleteRecive_service(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteRecive_serviceArgs): Promise<Recive_service | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).recive_service.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
