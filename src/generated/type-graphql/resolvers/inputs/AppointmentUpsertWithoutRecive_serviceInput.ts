import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateWithoutRecive_serviceInput } from "../inputs/AppointmentCreateWithoutRecive_serviceInput";
import { AppointmentUpdateWithoutRecive_serviceInput } from "../inputs/AppointmentUpdateWithoutRecive_serviceInput";

@TypeGraphQL.InputType("AppointmentUpsertWithoutRecive_serviceInput", {
  isAbstract: true
})
export class AppointmentUpsertWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutRecive_serviceInput, {
    nullable: false
  })
  update!: AppointmentUpdateWithoutRecive_serviceInput;

  @TypeGraphQL.Field(_type => AppointmentCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: AppointmentCreateWithoutRecive_serviceInput;
}
