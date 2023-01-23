import * as TypeGraphQL from "type-graphql";

export enum CustommerScalarFieldEnum {
  id = "id",
  name = "name",
  Lname = "Lname",
  email = "email",
  phone = "phone",
  address = "address",
  create_at = "create_at"
}
TypeGraphQL.registerEnumType(CustommerScalarFieldEnum, {
  name: "CustommerScalarFieldEnum",
  description: undefined,
});
