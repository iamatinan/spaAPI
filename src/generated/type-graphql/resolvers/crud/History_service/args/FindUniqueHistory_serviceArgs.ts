import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { History_serviceWhereUniqueInput } from "../../../inputs/History_serviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueHistory_serviceArgs {
  @TypeGraphQL.Field(_type => History_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: History_serviceWhereUniqueInput;
}
