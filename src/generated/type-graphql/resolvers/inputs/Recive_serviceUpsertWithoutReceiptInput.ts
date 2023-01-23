import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateWithoutReceiptInput } from "../inputs/Recive_serviceCreateWithoutReceiptInput";
import { Recive_serviceUpdateWithoutReceiptInput } from "../inputs/Recive_serviceUpdateWithoutReceiptInput";

@TypeGraphQL.InputType("Recive_serviceUpsertWithoutReceiptInput", {
  isAbstract: true
})
export class Recive_serviceUpsertWithoutReceiptInput {
  @TypeGraphQL.Field(_type => Recive_serviceUpdateWithoutReceiptInput, {
    nullable: false
  })
  update!: Recive_serviceUpdateWithoutReceiptInput;

  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutReceiptInput, {
    nullable: false
  })
  create!: Recive_serviceCreateWithoutReceiptInput;
}
