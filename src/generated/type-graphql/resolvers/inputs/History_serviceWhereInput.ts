import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("History_serviceWhereInput", {
  isAbstract: true
})
export class History_serviceWhereInput {
  @TypeGraphQL.Field(_type => [History_serviceWhereInput], {
    nullable: true
  })
  AND?: History_serviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [History_serviceWhereInput], {
    nullable: true
  })
  OR?: History_serviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [History_serviceWhereInput], {
    nullable: true
  })
  NOT?: History_serviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  custommer_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  note?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  receip_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  create_at?: DateTimeFilter | undefined;
}
