import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerCreateWithoutRecive_serviceInput } from "../inputs/CustommerCreateWithoutRecive_serviceInput";
import { CustommerUpdateWithoutRecive_serviceInput } from "../inputs/CustommerUpdateWithoutRecive_serviceInput";

@TypeGraphQL.InputType("CustommerUpsertWithoutRecive_serviceInput", {
  isAbstract: true
})
export class CustommerUpsertWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => CustommerUpdateWithoutRecive_serviceInput, {
    nullable: false
  })
  update!: CustommerUpdateWithoutRecive_serviceInput;

  @TypeGraphQL.Field(_type => CustommerCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: CustommerCreateWithoutRecive_serviceInput;
}
