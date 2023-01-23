import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptCreateWithoutRecive_serviceInput } from "../inputs/ReceiptCreateWithoutRecive_serviceInput";
import { ReceiptUpdateWithoutRecive_serviceInput } from "../inputs/ReceiptUpdateWithoutRecive_serviceInput";

@TypeGraphQL.InputType("ReceiptUpsertWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ReceiptUpsertWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => ReceiptUpdateWithoutRecive_serviceInput, {
    nullable: false
  })
  update!: ReceiptUpdateWithoutRecive_serviceInput;

  @TypeGraphQL.Field(_type => ReceiptCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: ReceiptCreateWithoutRecive_serviceInput;
}
