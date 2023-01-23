import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Recive_serviceUpdateManyMutationInput } from "../../../inputs/Recive_serviceUpdateManyMutationInput";
import { Recive_serviceWhereInput } from "../../../inputs/Recive_serviceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRecive_serviceArgs {
  @TypeGraphQL.Field(_type => Recive_serviceUpdateManyMutationInput, {
    nullable: false
  })
  data!: Recive_serviceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Recive_serviceWhereInput, {
    nullable: true
  })
  where?: Recive_serviceWhereInput | undefined;
}
