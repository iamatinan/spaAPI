import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionAvgOrderByAggregateInput } from "../inputs/PromotionAvgOrderByAggregateInput";
import { PromotionCountOrderByAggregateInput } from "../inputs/PromotionCountOrderByAggregateInput";
import { PromotionMaxOrderByAggregateInput } from "../inputs/PromotionMaxOrderByAggregateInput";
import { PromotionMinOrderByAggregateInput } from "../inputs/PromotionMinOrderByAggregateInput";
import { PromotionSumOrderByAggregateInput } from "../inputs/PromotionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PromotionOrderByWithAggregationInput", {
  isAbstract: true
})
export class PromotionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  promption_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discount_price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  promotion_start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  promotion_end?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  create_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PromotionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PromotionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PromotionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PromotionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PromotionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PromotionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PromotionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PromotionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PromotionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PromotionSumOrderByAggregateInput | undefined;
}
