import * as TypeGraphQL from "type-graphql";

export enum AppointmentScalarFieldEnum {
  id = "id",
  date_appoint = "date_appoint",
  create_at = "create_at",
  appoint_by = "appoint_by",
  booking_time_start = "booking_time_start",
  booking_time_end = "booking_time_end",
  finish = "finish",
  customer_id = "customer_id",
  massager_id = "massager_id"
}
TypeGraphQL.registerEnumType(AppointmentScalarFieldEnum, {
  name: "AppointmentScalarFieldEnum",
  description: undefined,
});
