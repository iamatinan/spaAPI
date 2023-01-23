import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMassagerArgs } from "./args/AggregateMassagerArgs";
import { Massager } from "../../../models/Massager";
import { AggregateMassager } from "../../outputs/AggregateMassager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Massager)
export class AggregateMassagerResolver {
  @TypeGraphQL.Query(_returns => AggregateMassager, {
    nullable: false
  })
  async aggregateMassager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMassagerArgs): Promise<AggregateMassager> {
    return getPrismaFromContext(ctx).massager.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
