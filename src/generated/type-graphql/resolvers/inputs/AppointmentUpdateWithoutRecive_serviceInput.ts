import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CustommerUpdateOneRequiredWithoutAppointmentInput } from "../inputs/CustommerUpdateOneRequiredWithoutAppointmentInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MassagerUpdateOneRequiredWithoutAppointmentInput } from "../inputs/MassagerUpdateOneRequiredWithoutAppointmentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AppointmentUpdateWithoutRecive_serviceInput", {
  isAbstract: true
})
export class AppointmentUpdateWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date_appoint?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  create_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  appoint_by?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  booking_time_start?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  booking_time_end?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  finish?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustommerUpdateOneRequiredWithoutAppointmentInput, {
    nullable: true
  })
  custommer?: CustommerUpdateOneRequiredWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => MassagerUpdateOneRequiredWithoutAppointmentInput, {
    nullable: true
  })
  massager?: MassagerUpdateOneRequiredWithoutAppointmentInput | undefined;
}
