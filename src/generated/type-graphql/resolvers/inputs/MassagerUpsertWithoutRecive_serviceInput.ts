import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerCreateWithoutRecive_serviceInput } from "../inputs/MassagerCreateWithoutRecive_serviceInput";
import { MassagerUpdateWithoutRecive_serviceInput } from "../inputs/MassagerUpdateWithoutRecive_serviceInput";

@TypeGraphQL.InputType("MassagerUpsertWithoutRecive_serviceInput", {
  isAbstract: true
})
export class MassagerUpsertWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => MassagerUpdateWithoutRecive_serviceInput, {
    nullable: false
  })
  update!: MassagerUpdateWithoutRecive_serviceInput;

  @TypeGraphQL.Field(_type => MassagerCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: MassagerCreateWithoutRecive_serviceInput;
}
