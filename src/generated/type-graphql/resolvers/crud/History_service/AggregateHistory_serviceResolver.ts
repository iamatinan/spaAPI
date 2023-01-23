import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateHistory_serviceArgs } from "./args/AggregateHistory_serviceArgs";
import { History_service } from "../../../models/History_service";
import { AggregateHistory_service } from "../../outputs/AggregateHistory_service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => History_service)
export class AggregateHistory_serviceResolver {
  @TypeGraphQL.Query(_returns => AggregateHistory_service, {
    nullable: false
  })
  async aggregateHistory_service(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateHistory_serviceArgs): Promise<AggregateHistory_service> {
    return getPrismaFromContext(ctx).history_service.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
