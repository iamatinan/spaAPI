import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptAvgAggregate } from "../outputs/ReceiptAvgAggregate";
import { ReceiptCountAggregate } from "../outputs/ReceiptCountAggregate";
import { ReceiptMaxAggregate } from "../outputs/ReceiptMaxAggregate";
import { ReceiptMinAggregate } from "../outputs/ReceiptMinAggregate";
import { ReceiptSumAggregate } from "../outputs/ReceiptSumAggregate";

@TypeGraphQL.ObjectType("ReceiptGroupBy", {
  isAbstract: true
})
export class ReceiptGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customer_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  create_by!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  create_at!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  service_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  appoint_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  promotion_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  product_id!: number;

  @TypeGraphQL.Field(_type => ReceiptCountAggregate, {
    nullable: true
  })
  _count!: ReceiptCountAggregate | null;

  @TypeGraphQL.Field(_type => ReceiptAvgAggregate, {
    nullable: true
  })
  _avg!: ReceiptAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReceiptSumAggregate, {
    nullable: true
  })
  _sum!: ReceiptSumAggregate | null;

  @TypeGraphQL.Field(_type => ReceiptMinAggregate, {
    nullable: true
  })
  _min!: ReceiptMinAggregate | null;

  @TypeGraphQL.Field(_type => ReceiptMaxAggregate, {
    nullable: true
  })
  _max!: ReceiptMaxAggregate | null;
}
