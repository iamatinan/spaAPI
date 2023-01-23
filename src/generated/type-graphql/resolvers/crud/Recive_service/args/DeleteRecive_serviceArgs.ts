import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Recive_serviceWhereUniqueInput } from "../../../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRecive_serviceArgs {
  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;
}
