import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { History_serviceWhereInput } from "../../../inputs/History_serviceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyHistory_serviceArgs {
  @TypeGraphQL.Field(_type => History_serviceWhereInput, {
    nullable: true
  })
  where?: History_serviceWhereInput | undefined;
}
