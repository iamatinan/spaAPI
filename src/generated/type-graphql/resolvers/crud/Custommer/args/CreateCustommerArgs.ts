import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustommerCreateInput } from "../../../inputs/CustommerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCustommerArgs {
  @TypeGraphQL.Field(_type => CustommerCreateInput, {
    nullable: false
  })
  data!: CustommerCreateInput;
}
