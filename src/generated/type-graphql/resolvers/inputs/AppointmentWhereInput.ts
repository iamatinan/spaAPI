import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CustommerRelationFilter } from "../inputs/CustommerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MassagerRelationFilter } from "../inputs/MassagerRelationFilter";
import { Recive_serviceRelationFilter } from "../inputs/Recive_serviceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AppointmentWhereInput", {
  isAbstract: true
})
export class AppointmentWhereInput {
  @TypeGraphQL.Field(_type => [AppointmentWhereInput], {
    nullable: true
  })
  AND?: AppointmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereInput], {
    nullable: true
  })
  OR?: AppointmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereInput], {
    nullable: true
  })
  NOT?: AppointmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_appoint?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  create_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  appoint_by?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  booking_time_start?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  booking_time_end?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  finish?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => CustommerRelationFilter, {
    nullable: true
  })
  custommer?: CustommerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customer_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MassagerRelationFilter, {
    nullable: true
  })
  massager?: MassagerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  massager_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceRelationFilter, {
    nullable: true
  })
  recive_service?: Recive_serviceRelationFilter | undefined;
}
