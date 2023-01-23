import * as TypeGraphQL from "type-graphql";

export enum ReceiptScalarFieldEnum {
  id = "id",
  customer_id = "customer_id",
  create_by = "create_by",
  create_at = "create_at",
  service_id = "service_id",
  appoint_id = "appoint_id",
  promotion_id = "promotion_id",
  product_id = "product_id"
}
TypeGraphQL.registerEnumType(ReceiptScalarFieldEnum, {
  name: "ReceiptScalarFieldEnum",
  description: undefined,
});
