import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Recive_serviceWhereInput } from "../../../inputs/Recive_serviceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRecive_serviceArgs {
  @TypeGraphQL.Field(_type => Recive_serviceWhereInput, {
    nullable: true
  })
  where?: Recive_serviceWhereInput | undefined;
}
