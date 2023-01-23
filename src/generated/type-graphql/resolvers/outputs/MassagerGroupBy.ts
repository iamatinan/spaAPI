import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerAvgAggregate } from "../outputs/MassagerAvgAggregate";
import { MassagerCountAggregate } from "../outputs/MassagerCountAggregate";
import { MassagerMaxAggregate } from "../outputs/MassagerMaxAggregate";
import { MassagerMinAggregate } from "../outputs/MassagerMinAggregate";
import { MassagerSumAggregate } from "../outputs/MassagerSumAggregate";

@TypeGraphQL.ObjectType("MassagerGroupBy", {
  isAbstract: true
})
export class MassagerGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

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
