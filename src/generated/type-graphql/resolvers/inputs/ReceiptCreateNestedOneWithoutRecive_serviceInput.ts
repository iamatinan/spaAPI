import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptCreateOrConnectWithoutRecive_serviceInput } from "../inputs/ReceiptCreateOrConnectWithoutRecive_serviceInput";
import { ReceiptCreateWithoutRecive_serviceInput } from "../inputs/ReceiptCreateWithoutRecive_serviceInput";
import { ReceiptWhereUniqueInput } from "../inputs/ReceiptWhereUniqueInput";

@TypeGraphQL.InputType("ReceiptCreateNestedOneWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ReceiptCreateNestedOneWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => ReceiptCreateWithoutRecive_serviceInput, {
    nullable: true
  })
  create?: ReceiptCreateWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptCreateOrConnectWithoutRecive_serviceInput, {
    nullable: true
  })
  connectOrCreate?: ReceiptCreateOrConnectWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptWhereUniqueInput, {
    nullable: true
  })
  connect?: ReceiptWhereUniqueInput | undefined;
}
