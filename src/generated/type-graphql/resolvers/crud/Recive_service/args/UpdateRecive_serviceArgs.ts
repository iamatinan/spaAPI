import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Recive_serviceUpdateInput } from "../../../inputs/Recive_serviceUpdateInput";
import { Recive_serviceWhereUniqueInput } from "../../../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRecive_serviceArgs {
  @TypeGraphQL.Field(_type => Recive_serviceUpdateInput, {
    nullable: false
  })
  data!: Recive_serviceUpdateInput;

  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;
}
