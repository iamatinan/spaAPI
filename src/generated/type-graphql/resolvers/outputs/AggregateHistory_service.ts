import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { History_serviceAvgAggregate } from "../outputs/History_serviceAvgAggregate";
import { History_serviceCountAggregate } from "../outputs/History_serviceCountAggregate";
import { History_serviceMaxAggregate } from "../outputs/History_serviceMaxAggregate";
import { History_serviceMinAggregate } from "../outputs/History_serviceMinAggregate";
import { History_serviceSumAggregate } from "../outputs/History_serviceSumAggregate";

@TypeGraphQL.ObjectType("AggregateHistory_service", {
  isAbstract: true
})
export class AggregateHistory_service {
  @TypeGraphQL.Field(_type => History_serviceCountAggregate, {
    nullable: true
  })
  _count!: History_serviceCountAggregate | null;

  @TypeGraphQL.Field(_type => History_serviceAvgAggregate, {
    nullable: true
  })
  _avg!: History_serviceAvgAggregate | null;

  @TypeGraphQL.Field(_type => History_serviceSumAggregate, {
    nullable: true
  })
  _sum!: History_serviceSumAggregate | null;

  @TypeGraphQL.Field(_type => History_serviceMinAggregate, {
    nullable: true
  })
  _min!: History_serviceMinAggregate | null;

  @TypeGraphQL.Field(_type => History_serviceMaxAggregate, {
    nullable: true
  })
  _max!: History_serviceMaxAggregate | null;
}
