import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PromotionMinAggregate", {
  isAbstract: true
})
export class PromotionMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  promption_name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discount_price!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  promotion_start!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  promotion_end!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  create_at!: Date | null;
}
