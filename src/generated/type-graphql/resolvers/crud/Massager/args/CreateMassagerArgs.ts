import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MassagerCreateInput } from "../../../inputs/MassagerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMassagerArgs {
  @TypeGraphQL.Field(_type => MassagerCreateInput, {
    nullable: false
  })
  data!: MassagerCreateInput;
}
