import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRecive_serviceArgs } from "./args/AggregateRecive_serviceArgs";
import { Recive_service } from "../../../models/Recive_service";
import { AggregateRecive_service } from "../../outputs/AggregateRecive_service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recive_service)
export class AggregateRecive_serviceResolver {
  @TypeGraphQL.Query(_returns => AggregateRecive_service, {
    nullable: false
  })
  async aggregateRecive_service(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRecive_serviceArgs): Promise<AggregateRecive_service> {
    return getPrismaFromContext(ctx).recive_service.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
