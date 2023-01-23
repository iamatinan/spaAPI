import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ReceiptScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReceiptScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReceiptScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReceiptScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceiptScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReceiptScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceiptScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReceiptScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  customer_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  create_by?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  create_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  service_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  appoint_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  promotion_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  product_id?: IntWithAggregatesFilter | undefined;
}
