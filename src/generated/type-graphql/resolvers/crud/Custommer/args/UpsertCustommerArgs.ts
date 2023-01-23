import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustommerCreateInput } from "../../../inputs/CustommerCreateInput";
import { CustommerUpdateInput } from "../../../inputs/CustommerUpdateInput";
import { CustommerWhereUniqueInput } from "../../../inputs/CustommerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCustommerArgs {
  @TypeGraphQL.Field(_type => CustommerWhereUniqueInput, {
    nullable: false
  })
  where!: CustommerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustommerCreateInput, {
    nullable: false
  })
  create!: CustommerCreateInput;

  @TypeGraphQL.Field(_type => CustommerUpdateInput, {
    nullable: false
  })
  update!: CustommerUpdateInput;
}
