import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("History_serviceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class History_serviceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [History_serviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: History_serviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [History_serviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: History_serviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [History_serviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: History_serviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  custommer_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  note?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  receip_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  create_at?: DateTimeWithAggregatesFilter | undefined;
}
