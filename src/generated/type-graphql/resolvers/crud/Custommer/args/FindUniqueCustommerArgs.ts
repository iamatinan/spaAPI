import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustommerWhereUniqueInput } from "../../../inputs/CustommerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustommerArgs {
  @TypeGraphQL.Field(_type => CustommerWhereUniqueInput, {
    nullable: false
  })
  where!: CustommerWhereUniqueInput;
}
