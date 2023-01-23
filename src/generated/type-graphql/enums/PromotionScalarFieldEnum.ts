import * as TypeGraphQL from "type-graphql";

export enum PromotionScalarFieldEnum {
  id = "id",
  promption_name = "promption_name",
  discount_price = "discount_price",
  promotion_start = "promotion_start",
  promotion_end = "promotion_end",
  create_at = "create_at"
}
TypeGraphQL.registerEnumType(PromotionScalarFieldEnum, {
  name: "PromotionScalarFieldEnum",
  description: undefined,
});
