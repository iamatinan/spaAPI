import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Recive_serviceCreateInput } from "../../../inputs/Recive_serviceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRecive_serviceArgs {
  @TypeGraphQL.Field(_type => Recive_serviceCreateInput, {
    nullable: false
  })
  data!: Recive_serviceCreateInput;
}
