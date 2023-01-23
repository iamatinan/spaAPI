import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutReceiptInput } from "../inputs/Recive_serviceCreateOrConnectWithoutReceiptInput";
import { Recive_serviceCreateWithoutReceiptInput } from "../inputs/Recive_serviceCreateWithoutReceiptInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateNestedOneWithoutReceiptInput", {
  isAbstract: true
})
export class Recive_serviceCreateNestedOneWithoutReceiptInput {
  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutReceiptInput, {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutReceiptInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceCreateOrConnectWithoutReceiptInput, {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutReceiptInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: true
  })
  connect?: Recive_serviceWhereUniqueInput | undefined;
}
