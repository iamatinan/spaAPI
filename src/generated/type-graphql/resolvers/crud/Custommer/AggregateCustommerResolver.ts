import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustommerArgs } from "./args/AggregateCustommerArgs";
import { Custommer } from "../../../models/Custommer";
import { AggregateCustommer } from "../../outputs/AggregateCustommer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Custommer)
export class AggregateCustommerResolver {
  @TypeGraphQL.Query(_returns => AggregateCustommer, {
    nullable: false
  })
  async aggregateCustommer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustommerArgs): Promise<AggregateCustommer> {
    return getPrismaFromContext(ctx).custommer.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
