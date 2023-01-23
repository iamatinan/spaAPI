import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MassagerCreateInput } from "../../../inputs/MassagerCreateInput";
import { MassagerUpdateInput } from "../../../inputs/MassagerUpdateInput";
import { MassagerWhereUniqueInput } from "../../../inputs/MassagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMassagerArgs {
  @TypeGraphQL.Field(_type => MassagerWhereUniqueInput, {
    nullable: false
  })
  where!: MassagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MassagerCreateInput, {
    nullable: false
  })
  create!: MassagerCreateInput;

  @TypeGraphQL.Field(_type => MassagerUpdateInput, {
    nullable: false
  })
  update!: MassagerUpdateInput;
}
