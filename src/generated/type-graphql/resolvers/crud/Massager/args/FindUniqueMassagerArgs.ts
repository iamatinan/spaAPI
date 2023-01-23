import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MassagerWhereUniqueInput } from "../../../inputs/MassagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMassagerArgs {
  @TypeGraphQL.Field(_type => MassagerWhereUniqueInput, {
    nullable: false
  })
  where!: MassagerWhereUniqueInput;
}
