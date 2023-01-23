import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateWithoutCustomerInput } from "../inputs/Recive_serviceCreateWithoutCustomerInput";
import { Recive_serviceUpdateWithoutCustomerInput } from "../inputs/Recive_serviceUpdateWithoutCustomerInput";

@TypeGraphQL.InputType("Recive_serviceUpsertWithoutCustomerInput", {
  isAbstract: true
})
export class Recive_serviceUpsertWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Recive_serviceUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: Recive_serviceUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Recive_serviceCreateWithoutCustomerInput;
}
