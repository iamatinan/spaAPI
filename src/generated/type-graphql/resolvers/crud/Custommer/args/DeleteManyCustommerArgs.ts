import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustommerWhereInput } from "../../../inputs/CustommerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustommerArgs {
  @TypeGraphQL.Field(_type => CustommerWhereInput, {
    nullable: true
  })
  where?: CustommerWhereInput | undefined;
}
