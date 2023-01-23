import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptAvgOrderByAggregateInput } from "../inputs/ReceiptAvgOrderByAggregateInput";
import { ReceiptCountOrderByAggregateInput } from "../inputs/ReceiptCountOrderByAggregateInput";
import { ReceiptMaxOrderByAggregateInput } from "../inputs/ReceiptMaxOrderByAggregateInput";
import { ReceiptMinOrderByAggregateInput } from "../inputs/ReceiptMinOrderByAggregateInput";
import { ReceiptSumOrderByAggregateInput } from "../inputs/ReceiptSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReceiptOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReceiptOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  create_by?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  create_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  service_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appoint_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  promotion_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReceiptCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReceiptCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ReceiptAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReceiptMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReceiptMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ReceiptSumOrderByAggregateInput | undefined;
}
