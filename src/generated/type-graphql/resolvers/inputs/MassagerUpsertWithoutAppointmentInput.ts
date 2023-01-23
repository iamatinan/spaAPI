import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerCreateWithoutAppointmentInput } from "../inputs/MassagerCreateWithoutAppointmentInput";
import { MassagerUpdateWithoutAppointmentInput } from "../inputs/MassagerUpdateWithoutAppointmentInput";

@TypeGraphQL.InputType("MassagerUpsertWithoutAppointmentInput", {
  isAbstract: true
})
export class MassagerUpsertWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => MassagerUpdateWithoutAppointmentInput, {
    nullable: false
  })
  update!: MassagerUpdateWithoutAppointmentInput;

  @TypeGraphQL.Field(_type => MassagerCreateWithoutAppointmentInput, {
    nullable: false
  })
  create!: MassagerCreateWithoutAppointmentInput;
}
