import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustommerUpdateInput } from "../../../inputs/CustommerUpdateInput";
import { CustommerWhereUniqueInput } from "../../../inputs/CustommerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCustommerArgs {
  @TypeGraphQL.Field(_type => CustommerUpdateInput, {
    nullable: false
  })
  data!: CustommerUpdateInput;

  @TypeGraphQL.Field(_type => CustommerWhereUniqueInput, {
    nullable: false
  })
  where!: CustommerWhereUniqueInput;
}
