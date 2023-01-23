import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustommerCreateManyInput } from "../../../inputs/CustommerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustommerArgs {
  @TypeGraphQL.Field(_type => [CustommerCreateManyInput], {
    nullable: false
  })
  data!: CustommerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
