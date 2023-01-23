import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionAvgAggregate } from "../outputs/PromotionAvgAggregate";
import { PromotionCountAggregate } from "../outputs/PromotionCountAggregate";
import { PromotionMaxAggregate } from "../outputs/PromotionMaxAggregate";
import { PromotionMinAggregate } from "../outputs/PromotionMinAggregate";
import { PromotionSumAggregate } from "../outputs/PromotionSumAggregate";

@TypeGraphQL.ObjectType("PromotionGroupBy", {
  isAbstract: true
})
export class PromotionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  promption_name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discount_price!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  promotion_start!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  promotion_end!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  create_at!: Date;

  @TypeGraphQL.Field(_type => PromotionCountAggregate, {
    nullable: true
  })
  _count!: PromotionCountAggregate | null;

  @TypeGraphQL.Field(_type => PromotionAvgAggregate, {
    nullable: true
  })
  _avg!: PromotionAvgAggregate | null;

  @TypeGraphQL.Field(_type => PromotionSumAggregate, {
    nullable: true
  })
  _sum!: PromotionSumAggregate | null;

  @TypeGraphQL.Field(_type => PromotionMinAggregate, {
    nullable: true
  })
  _min!: PromotionMinAggregate | null;

  @TypeGraphQL.Field(_type => PromotionMaxAggregate, {
    nullable: true
  })
  _max!: PromotionMaxAggregate | null;
}
