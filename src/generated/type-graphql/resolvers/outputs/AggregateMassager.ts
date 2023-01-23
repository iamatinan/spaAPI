import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerAvgAggregate } from "../outputs/MassagerAvgAggregate";
import { MassagerCountAggregate } from "../outputs/MassagerCountAggregate";
import { MassagerMaxAggregate } from "../outputs/MassagerMaxAggregate";
import { MassagerMinAggregate } from "../outputs/MassagerMinAggregate";
import { MassagerSumAggregate } from "../outputs/MassagerSumAggregate";

@TypeGraphQL.ObjectType("AggregateMassager", {
  isAbstract: true
})
export class AggregateMassager {
  @TypeGraphQL.Field(_type => MassagerCountAggregate, {
    nullable: true
  })
  _count!: MassagerCountAggregate | null;

  @TypeGraphQL.Field(_type => MassagerAvgAggregate, {
    nullable: true
  })
  _avg!: MassagerAvgAggregate | null;

  @TypeGraphQL.Field(_type => MassagerSumAggregate, {
    nullable: true
  })
  _sum!: MassagerSumAggregate | null;

  @TypeGraphQL.Field(_type => MassagerMinAggregate, {
    nullable: true
  })
  _min!: MassagerMinAggregate | null;

  @TypeGraphQL.Field(_type => MassagerMaxAggregate, {
    nullable: true
  })
  _max!: MassagerMaxAggregate | null;
}
