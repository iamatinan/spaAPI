import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutMassagerInput } from "../inputs/Recive_serviceCreateOrConnectWithoutMassagerInput";
import { Recive_serviceCreateWithoutMassagerInput } from "../inputs/Recive_serviceCreateWithoutMassagerInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateNestedOneWithoutMassagerInput", {
  isAbstract: true
})
export class Recive_serviceCreateNestedOneWithoutMassagerInput {
  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutMassagerInput, {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutMassagerInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceCreateOrConnectWithoutMassagerInput, {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutMassagerInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: true
  })
  connect?: Recive_serviceWhereUniqueInput | undefined;
}
