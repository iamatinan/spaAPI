import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerAvgOrderByAggregateInput } from "../inputs/CustommerAvgOrderByAggregateInput";
import { CustommerCountOrderByAggregateInput } from "../inputs/CustommerCountOrderByAggregateInput";
import { CustommerMaxOrderByAggregateInput } from "../inputs/CustommerMaxOrderByAggregateInput";
import { CustommerMinOrderByAggregateInput } from "../inputs/CustommerMinOrderByAggregateInput";
import { CustommerSumOrderByAggregateInput } from "../inputs/CustommerSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustommerOrderByWithAggregationInput", {
  isAbstract: true
})
export class CustommerOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => CustommerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CustommerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustommerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CustommerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustommerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CustommerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustommerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CustommerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustommerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CustommerSumOrderByAggregateInput | undefined;
}
