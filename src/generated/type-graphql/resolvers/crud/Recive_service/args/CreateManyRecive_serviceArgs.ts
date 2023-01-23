import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Recive_serviceCreateManyInput } from "../../../inputs/Recive_serviceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRecive_serviceArgs {
  @TypeGraphQL.Field(_type => [Recive_serviceCreateManyInput], {
    nullable: false
  })
  data!: Recive_serviceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
