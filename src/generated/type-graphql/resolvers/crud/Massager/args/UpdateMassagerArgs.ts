import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MassagerUpdateInput } from "../../../inputs/MassagerUpdateInput";
import { MassagerWhereUniqueInput } from "../../../inputs/MassagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMassagerArgs {
  @TypeGraphQL.Field(_type => MassagerUpdateInput, {
    nullable: false
  })
  data!: MassagerUpdateInput;

  @TypeGraphQL.Field(_type => MassagerWhereUniqueInput, {
    nullable: false
  })
  where!: MassagerWhereUniqueInput;
}
