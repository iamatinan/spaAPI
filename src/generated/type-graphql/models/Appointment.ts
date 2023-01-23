import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Custommer } from "../models/Custommer";
import { Massager } from "../models/Massager";
import { Recive_service } from "../models/Recive_service";

@TypeGraphQL.ObjectType("Appointment", {
  isAbstract: true
})
export class Appointment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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

  custommer?: Custommer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customer_id!: number;

  massager?: Massager;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  massager_id!: number;

  recive_service?: Recive_service | null;
}
