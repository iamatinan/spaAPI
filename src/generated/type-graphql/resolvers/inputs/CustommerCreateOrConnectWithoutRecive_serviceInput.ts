import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerCreateWithoutRecive_serviceInput } from "../inputs/CustommerCreateWithoutRecive_serviceInput";
import { CustommerWhereUniqueInput } from "../inputs/CustommerWhereUniqueInput";

@TypeGraphQL.InputType("CustommerCreateOrConnectWithoutRecive_serviceInput", {
  isAbstract: true
})
export class CustommerCreateOrConnectWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => CustommerWhereUniqueInput, {
    nullable: false
  })
  where!: CustommerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustommerCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: CustommerCreateWithoutRecive_serviceInput;
}
