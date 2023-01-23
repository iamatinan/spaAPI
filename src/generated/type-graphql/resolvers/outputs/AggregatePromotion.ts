import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionAvgAggregate } from "../outputs/PromotionAvgAggregate";
import { PromotionCountAggregate } from "../outputs/PromotionCountAggregate";
import { PromotionMaxAggregate } from "../outputs/PromotionMaxAggregate";
import { PromotionMinAggregate } from "../outputs/PromotionMinAggregate";
import { PromotionSumAggregate } from "../outputs/PromotionSumAggregate";

@TypeGraphQL.ObjectType("AggregatePromotion", {
  isAbstract: true
})
export class AggregatePromotion {
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
