import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptCreateWithoutRecive_serviceInput } from "../inputs/ReceiptCreateWithoutRecive_serviceInput";
import { ReceiptWhereUniqueInput } from "../inputs/ReceiptWhereUniqueInput";

@TypeGraphQL.InputType("ReceiptCreateOrConnectWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ReceiptCreateOrConnectWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => ReceiptWhereUniqueInput, {
    nullable: false
  })
  where!: ReceiptWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReceiptCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: ReceiptCreateWithoutRecive_serviceInput;
}
