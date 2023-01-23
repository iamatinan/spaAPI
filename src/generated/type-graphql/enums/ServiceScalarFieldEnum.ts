import * as TypeGraphQL from "type-graphql";

export enum ServiceScalarFieldEnum {
  id = "id",
  service_name = "service_name",
  price = "price",
  create_at = "create_at"
}
TypeGraphQL.registerEnumType(ServiceScalarFieldEnum, {
  name: "ServiceScalarFieldEnum",
  description: undefined,
});
