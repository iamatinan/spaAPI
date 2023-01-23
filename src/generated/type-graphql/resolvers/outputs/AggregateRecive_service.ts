import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceAvgAggregate } from "../outputs/Recive_serviceAvgAggregate";
import { Recive_serviceCountAggregate } from "../outputs/Recive_serviceCountAggregate";
import { Recive_serviceMaxAggregate } from "../outputs/Recive_serviceMaxAggregate";
import { Recive_serviceMinAggregate } from "../outputs/Recive_serviceMinAggregate";
import { Recive_serviceSumAggregate } from "../outputs/Recive_serviceSumAggregate";

@TypeGraphQL.ObjectType("AggregateRecive_service", {
  isAbstract: true
})
export class AggregateRecive_service {
  @TypeGraphQL.Field(_type => Recive_serviceCountAggregate, {
    nullable: true
  })
  _count!: Recive_serviceCountAggregate | null;

  @TypeGraphQL.Field(_type => Recive_serviceAvgAggregate, {
    nullable: true
  })
  _avg!: Recive_serviceAvgAggregate | null;

  @TypeGraphQL.Field(_type => Recive_serviceSumAggregate, {
    nullable: true
  })
  _sum!: Recive_serviceSumAggregate | null;

  @TypeGraphQL.Field(_type => Recive_serviceMinAggregate, {
    nullable: true
  })
  _min!: Recive_serviceMinAggregate | null;

  @TypeGraphQL.Field(_type => Recive_serviceMaxAggregate, {
    nullable: true
  })
  _max!: Recive_serviceMaxAggregate | null;
}
