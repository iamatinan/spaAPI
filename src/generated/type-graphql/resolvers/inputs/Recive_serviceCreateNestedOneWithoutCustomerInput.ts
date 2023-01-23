import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutCustomerInput } from "../inputs/Recive_serviceCreateOrConnectWithoutCustomerInput";
import { Recive_serviceCreateWithoutCustomerInput } from "../inputs/Recive_serviceCreateWithoutCustomerInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateNestedOneWithoutCustomerInput", {
  isAbstract: true
})
export class Recive_serviceCreateNestedOneWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: true
  })
  connect?: Recive_serviceWhereUniqueInput | undefined;
}
