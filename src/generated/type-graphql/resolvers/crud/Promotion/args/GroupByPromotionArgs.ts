import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionOrderByWithAggregationInput } from "../../../inputs/PromotionOrderByWithAggregationInput";
import { PromotionScalarWhereWithAggregatesInput } from "../../../inputs/PromotionScalarWhereWithAggregatesInput";
import { PromotionWhereInput } from "../../../inputs/PromotionWhereInput";
import { PromotionScalarFieldEnum } from "../../../../enums/PromotionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotionArgs {
  @TypeGraphQL.Field(_type => PromotionWhereInput, {
    nullable: true
  })
  where?: PromotionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PromotionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PromotionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "promption_name" | "discount_price" | "promotion_start" | "promotion_end" | "create_at">;

  @TypeGraphQL.Field(_type => PromotionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PromotionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
