import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateWithoutMassagerInput } from "../inputs/Recive_serviceCreateWithoutMassagerInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateOrConnectWithoutMassagerInput", {
  isAbstract: true
})
export class Recive_serviceCreateOrConnectWithoutMassagerInput {
  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutMassagerInput, {
    nullable: false
  })
  create!: Recive_serviceCreateWithoutMassagerInput;
}
