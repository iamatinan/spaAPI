import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustommerUpdateManyMutationInput } from "../../../inputs/CustommerUpdateManyMutationInput";
import { CustommerWhereInput } from "../../../inputs/CustommerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustommerArgs {
  @TypeGraphQL.Field(_type => CustommerUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustommerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CustommerWhereInput, {
    nullable: true
  })
  where?: CustommerWhereInput | undefined;
}
