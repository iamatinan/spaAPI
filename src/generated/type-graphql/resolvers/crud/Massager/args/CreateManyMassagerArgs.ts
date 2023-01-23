import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MassagerCreateManyInput } from "../../../inputs/MassagerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMassagerArgs {
  @TypeGraphQL.Field(_type => [MassagerCreateManyInput], {
    nullable: false
  })
  data!: MassagerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
