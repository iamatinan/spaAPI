import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerCreateNestedOneWithoutAppointmentInput } from "../inputs/CustommerCreateNestedOneWithoutAppointmentInput";
import { MassagerCreateNestedOneWithoutAppointmentInput } from "../inputs/MassagerCreateNestedOneWithoutAppointmentInput";
import { Recive_serviceCreateNestedOneWithoutAppointmentInput } from "../inputs/Recive_serviceCreateNestedOneWithoutAppointmentInput";

@TypeGraphQL.InputType("AppointmentCreateInput", {
  isAbstract: true
})
export class AppointmentCreateInput {
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

  @TypeGraphQL.Field(_type => Recive_serviceCreateNestedOneWithoutAppointmentInput, {
    nullable: true
  })
  recive_service?: Recive_serviceCreateNestedOneWithoutAppointmentInput | undefined;
}
