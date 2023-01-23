import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { History_serviceUpdateManyMutationInput } from "../../../inputs/History_serviceUpdateManyMutationInput";
import { History_serviceWhereInput } from "../../../inputs/History_serviceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyHistory_serviceArgs {
  @TypeGraphQL.Field(_type => History_serviceUpdateManyMutationInput, {
    nullable: false
  })
  data!: History_serviceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => History_serviceWhereInput, {
    nullable: true
  })
  where?: History_serviceWhereInput | undefined;
}
