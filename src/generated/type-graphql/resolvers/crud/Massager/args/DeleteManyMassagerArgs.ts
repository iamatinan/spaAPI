import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MassagerWhereInput } from "../../../inputs/MassagerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMassagerArgs {
  @TypeGraphQL.Field(_type => MassagerWhereInput, {
    nullable: true
  })
  where?: MassagerWhereInput | undefined;
}
