import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProductScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProductScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProductScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProductScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProductScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProductScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  product?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  product_price?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  create_at?: DateTimeWithAggregatesFilter | undefined;
}
