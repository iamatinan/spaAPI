import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PromotionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PromotionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PromotionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PromotionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PromotionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PromotionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  promption_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  discount_price?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  promotion_start?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  promotion_end?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  create_at?: DateTimeWithAggregatesFilter | undefined;
}
