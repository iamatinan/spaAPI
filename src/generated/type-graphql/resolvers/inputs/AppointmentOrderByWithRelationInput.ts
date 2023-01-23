import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerOrderByWithRelationInput } from "../inputs/CustommerOrderByWithRelationInput";
import { MassagerOrderByWithRelationInput } from "../inputs/MassagerOrderByWithRelationInput";
import { Recive_serviceOrderByWithRelationInput } from "../inputs/Recive_serviceOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AppointmentOrderByWithRelationInput", {
  isAbstract: true
})
export class AppointmentOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_appoint?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  create_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appoint_by?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  booking_time_start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  booking_time_end?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  finish?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustommerOrderByWithRelationInput, {
    nullable: true
  })
  custommer?: CustommerOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MassagerOrderByWithRelationInput, {
    nullable: true
  })
  massager?: MassagerOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  massager_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceOrderByWithRelationInput, {
    nullable: true
  })
  recive_service?: Recive_serviceOrderByWithRelationInput | undefined;
}
