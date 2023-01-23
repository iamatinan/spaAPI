import * as TypeGraphQL from "type-graphql";

export enum MassagerScalarFieldEnum {
  id = "id",
  name = "name",
  lname = "lname",
  user_id = "user_id",
  appointment_id = "appointment_id"
}
TypeGraphQL.registerEnumType(MassagerScalarFieldEnum, {
  name: "MassagerScalarFieldEnum",
  description: undefined,
});
