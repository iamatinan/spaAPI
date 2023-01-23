import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentOrderByRelationAggregateInput } from "../inputs/AppointmentOrderByRelationAggregateInput";
import { Recive_serviceOrderByWithRelationInput } from "../inputs/Recive_serviceOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustommerOrderByWithRelationInput", {
  isAbstract: true
})
export class CustommerOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Lname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  create_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AppointmentOrderByRelationAggregateInput, {
    nullable: true
  })
  appointment?: AppointmentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceOrderByWithRelationInput, {
    nullable: true
  })
  recive_service?: Recive_serviceOrderByWithRelationInput | undefined;
}
