import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentListRelationFilter } from "../inputs/AppointmentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Recive_serviceRelationFilter } from "../inputs/Recive_serviceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CustommerWhereInput", {
  isAbstract: true
})
export class CustommerWhereInput {
  @TypeGraphQL.Field(_type => [CustommerWhereInput], {
    nullable: true
  })
  AND?: CustommerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustommerWhereInput], {
    nullable: true
  })
  OR?: CustommerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustommerWhereInput], {
    nullable: true
  })
  NOT?: CustommerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Lname?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  phone?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  create_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => AppointmentListRelationFilter, {
    nullable: true
  })
  appointment?: AppointmentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceRelationFilter, {
    nullable: true
  })
  recive_service?: Recive_serviceRelationFilter | undefined;
}
