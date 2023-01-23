import * as TypeGraphQL from "type-graphql";

export enum ProductScalarFieldEnum {
  id = "id",
  name = "name",
  product = "product",
  product_price = "product_price",
  create_at = "create_at"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined,
});
