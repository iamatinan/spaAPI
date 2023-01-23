import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerCreateNestedOneWithoutAppointmentInput } from "../inputs/CustommerCreateNestedOneWithoutAppointmentInput";
import { MassagerCreateNestedOneWithoutAppointmentInput } from "../inputs/MassagerCreateNestedOneWithoutAppointmentInput";

@TypeGraphQL.InputType("AppointmentCreateWithoutRecive_serviceInput", {
  isAbstract: true
})
export class AppointmentCreateWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_appoint!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  create_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  appoint_by!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  booking_time_start!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  booking_time_end!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  finish!: boolean;

  @TypeGraphQL.Field(_type => CustommerCreateNestedOneWithoutAppointmentInput, {
    nullable: false
  })
  custommer!: CustommerCreateNestedOneWithoutAppointmentInput;

  @TypeGraphQL.Field(_type => MassagerCreateNestedOneWithoutAppointmentInput, {
    nullable: false
  })
  massager!: MassagerCreateNestedOneWithoutAppointmentInput;
}
