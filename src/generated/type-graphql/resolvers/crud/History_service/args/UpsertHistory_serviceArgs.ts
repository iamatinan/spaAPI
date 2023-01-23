import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { History_serviceCreateInput } from "../../../inputs/History_serviceCreateInput";
import { History_serviceUpdateInput } from "../../../inputs/History_serviceUpdateInput";
import { History_serviceWhereUniqueInput } from "../../../inputs/History_serviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertHistory_serviceArgs {
  @TypeGraphQL.Field(_type => History_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: History_serviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => History_serviceCreateInput, {
    nullable: false
  })
  create!: History_serviceCreateInput;

  @TypeGraphQL.Field(_type => History_serviceUpdateInput, {
    nullable: false
  })
  update!: History_serviceUpdateInput;
}
