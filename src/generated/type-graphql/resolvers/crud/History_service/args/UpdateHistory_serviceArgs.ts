import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { History_serviceUpdateInput } from "../../../inputs/History_serviceUpdateInput";
import { History_serviceWhereUniqueInput } from "../../../inputs/History_serviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateHistory_serviceArgs {
  @TypeGraphQL.Field(_type => History_serviceUpdateInput, {
    nullable: false
  })
  data!: History_serviceUpdateInput;

  @TypeGraphQL.Field(_type => History_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: History_serviceWhereUniqueInput;
}
