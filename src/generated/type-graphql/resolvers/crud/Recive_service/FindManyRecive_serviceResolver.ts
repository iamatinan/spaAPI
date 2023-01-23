import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyRecive_serviceArgs } from "./args/FindManyRecive_serviceArgs";
import { Recive_service } from "../../../models/Recive_service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recive_service)
export class FindManyRecive_serviceResolver {
  @TypeGraphQL.Query(_returns => [Recive_service], {
    nullable: false
  })
  async recive_services(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyRecive_serviceArgs): Promise<Recive_service[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).recive_service.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
