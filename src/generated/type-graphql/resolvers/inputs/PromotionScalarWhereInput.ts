import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PromotionScalarWhereInput", {
  isAbstract: true
})
export class PromotionScalarWhereInput {
  @TypeGraphQL.Field(_type => [PromotionScalarWhereInput], {
    nullable: true
  })
  AND?: PromotionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionScalarWhereInput], {
    nullable: true
  })
  OR?: PromotionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionScalarWhereInput], {
    nullable: true
  })
  NOT?: PromotionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  promption_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  discount_price?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  promotion_start?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  promotion_end?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  create_at?: DateTimeFilter | undefined;
}
