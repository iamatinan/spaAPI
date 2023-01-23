import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateWithoutAppointmentInput } from "../inputs/Recive_serviceCreateWithoutAppointmentInput";
import { Recive_serviceUpdateWithoutAppointmentInput } from "../inputs/Recive_serviceUpdateWithoutAppointmentInput";

@TypeGraphQL.InputType("Recive_serviceUpsertWithoutAppointmentInput", {
  isAbstract: true
})
export class Recive_serviceUpsertWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => Recive_serviceUpdateWithoutAppointmentInput, {
    nullable: false
  })
  update!: Recive_serviceUpdateWithoutAppointmentInput;

  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutAppointmentInput, {
    nullable: false
  })
  create!: Recive_serviceCreateWithoutAppointmentInput;
}
