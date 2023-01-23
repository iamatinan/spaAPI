import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentAvgAggregate } from "../outputs/AppointmentAvgAggregate";
import { AppointmentCountAggregate } from "../outputs/AppointmentCountAggregate";
import { AppointmentMaxAggregate } from "../outputs/AppointmentMaxAggregate";
import { AppointmentMinAggregate } from "../outputs/AppointmentMinAggregate";
import { AppointmentSumAggregate } from "../outputs/AppointmentSumAggregate";

@TypeGraphQL.ObjectType("AppointmentGroupBy", {
  isAbstract: true
})
export class AppointmentGroupBy {
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
  massager_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_appoint!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  create_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  appoint_by!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  booking_time_start!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  booking_time_end!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  finish!: boolean;

  @TypeGraphQL.Field(_type => AppointmentCountAggregate, {
    nullable: true
  })
  _count!: AppointmentCountAggregate | null;

  @TypeGraphQL.Field(_type => AppointmentAvgAggregate, {
    nullable: true
  })
  _avg!: AppointmentAvgAggregate | null;

  @TypeGraphQL.Field(_type => AppointmentSumAggregate, {
    nullable: true
  })
  _sum!: AppointmentSumAggregate | null;

  @TypeGraphQL.Field(_type => AppointmentMinAggregate, {
    nullable: true
  })
  _min!: AppointmentMinAggregate | null;

  @TypeGraphQL.Field(_type => AppointmentMaxAggregate, {
    nullable: true
  })
  _max!: AppointmentMaxAggregate | null;
}
