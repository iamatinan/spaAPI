import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MassagerUpdateManyMutationInput } from "../../../inputs/MassagerUpdateManyMutationInput";
import { MassagerWhereInput } from "../../../inputs/MassagerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMassagerArgs {
  @TypeGraphQL.Field(_type => MassagerUpdateManyMutationInput, {
    nullable: false
  })
  data!: MassagerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MassagerWhereInput, {
    nullable: true
  })
  where?: MassagerWhereInput | undefined;
}
