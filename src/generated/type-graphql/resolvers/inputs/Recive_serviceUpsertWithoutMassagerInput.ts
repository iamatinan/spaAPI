import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateWithoutMassagerInput } from "../inputs/Recive_serviceCreateWithoutMassagerInput";
import { Recive_serviceUpdateWithoutMassagerInput } from "../inputs/Recive_serviceUpdateWithoutMassagerInput";

@TypeGraphQL.InputType("Recive_serviceUpsertWithoutMassagerInput", {
  isAbstract: true
})
export class Recive_serviceUpsertWithoutMassagerInput {
  @TypeGraphQL.Field(_type => Recive_serviceUpdateWithoutMassagerInput, {
    nullable: false
  })
  update!: Recive_serviceUpdateWithoutMassagerInput;

  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutMassagerInput, {
    nullable: false
  })
  create!: Recive_serviceCreateWithoutMassagerInput;
}
