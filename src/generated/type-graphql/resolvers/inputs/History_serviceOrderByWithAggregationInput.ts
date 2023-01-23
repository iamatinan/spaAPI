import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { History_serviceAvgOrderByAggregateInput } from "../inputs/History_serviceAvgOrderByAggregateInput";
import { History_serviceCountOrderByAggregateInput } from "../inputs/History_serviceCountOrderByAggregateInput";
import { History_serviceMaxOrderByAggregateInput } from "../inputs/History_serviceMaxOrderByAggregateInput";
import { History_serviceMinOrderByAggregateInput } from "../inputs/History_serviceMinOrderByAggregateInput";
import { History_serviceSumOrderByAggregateInput } from "../inputs/History_serviceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("History_serviceOrderByWithAggregationInput", {
  isAbstract: true
})
export class History_serviceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  custommer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  note?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  receip_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  create_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => History_serviceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: History_serviceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => History_serviceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: History_serviceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => History_serviceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: History_serviceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => History_serviceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: History_serviceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => History_serviceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: History_serviceSumOrderByAggregateInput | undefined;
}
