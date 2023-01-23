import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { History_serviceCreateManyInput } from "../../../inputs/History_serviceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyHistory_serviceArgs {
  @TypeGraphQL.Field(_type => [History_serviceCreateManyInput], {
    nullable: false
  })
  data!: History_serviceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
