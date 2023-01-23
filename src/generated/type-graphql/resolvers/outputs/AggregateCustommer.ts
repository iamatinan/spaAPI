import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerAvgAggregate } from "../outputs/CustommerAvgAggregate";
import { CustommerCountAggregate } from "../outputs/CustommerCountAggregate";
import { CustommerMaxAggregate } from "../outputs/CustommerMaxAggregate";
import { CustommerMinAggregate } from "../outputs/CustommerMinAggregate";
import { CustommerSumAggregate } from "../outputs/CustommerSumAggregate";

@TypeGraphQL.ObjectType("AggregateCustommer", {
  isAbstract: true
})
export class AggregateCustommer {
  @TypeGraphQL.Field(_type => CustommerCountAggregate, {
    nullable: true
  })
  _count!: CustommerCountAggregate | null;

  @TypeGraphQL.Field(_type => CustommerAvgAggregate, {
    nullable: true
  })
  _avg!: CustommerAvgAggregate | null;

  @TypeGraphQL.Field(_type => CustommerSumAggregate, {
    nullable: true
  })
  _sum!: CustommerSumAggregate | null;

  @TypeGraphQL.Field(_type => CustommerMinAggregate, {
    nullable: true
  })
  _min!: CustommerMinAggregate | null;

  @TypeGraphQL.Field(_type => CustommerMaxAggregate, {
    nullable: true
  })
  _max!: CustommerMaxAggregate | null;
}
