import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Recive_serviceCreateInput } from "../../../inputs/Recive_serviceCreateInput";
import { Recive_serviceUpdateInput } from "../../../inputs/Recive_serviceUpdateInput";
import { Recive_serviceWhereUniqueInput } from "../../../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRecive_serviceArgs {
  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Recive_serviceCreateInput, {
    nullable: false
  })
  create!: Recive_serviceCreateInput;

  @TypeGraphQL.Field(_type => Recive_serviceUpdateInput, {
    nullable: false
  })
  update!: Recive_serviceUpdateInput;
}
