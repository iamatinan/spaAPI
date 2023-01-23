import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AppointmentCreateManyMassagerInput", {
  isAbstract: true
})
export class AppointmentCreateManyMassagerInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_appoint!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  create_at?: Date | undefined;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customer_id!: number;
}
