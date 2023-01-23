import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { History_serviceCreateInput } from "../../../inputs/History_serviceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateHistory_serviceArgs {
  @TypeGraphQL.Field(_type => History_serviceCreateInput, {
    nullable: false
  })
  data!: History_serviceCreateInput;
}
