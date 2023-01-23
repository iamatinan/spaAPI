import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateWithoutReceiptInput } from "../inputs/Recive_serviceCreateWithoutReceiptInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateOrConnectWithoutReceiptInput", {
  isAbstract: true
})
export class Recive_serviceCreateOrConnectWithoutReceiptInput {
  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutReceiptInput, {
    nullable: false
  })
  create!: Recive_serviceCreateWithoutReceiptInput;
}
