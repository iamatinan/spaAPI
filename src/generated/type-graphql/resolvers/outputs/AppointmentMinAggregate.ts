import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AppointmentMinAggregate", {
  isAbstract: true
})
export class AppointmentMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_appoint!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  create_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  appoint_by!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  booking_time_start!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  booking_time_end!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  finish!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customer_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  massager_id!: number | null;
}
