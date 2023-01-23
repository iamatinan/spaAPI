import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerAvgOrderByAggregateInput } from "../inputs/MassagerAvgOrderByAggregateInput";
import { MassagerCountOrderByAggregateInput } from "../inputs/MassagerCountOrderByAggregateInput";
import { MassagerMaxOrderByAggregateInput } from "../inputs/MassagerMaxOrderByAggregateInput";
import { MassagerMinOrderByAggregateInput } from "../inputs/MassagerMinOrderByAggregateInput";
import { MassagerSumOrderByAggregateInput } from "../inputs/MassagerSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MassagerOrderByWithAggregationInput", {
  isAbstract: true
})
export class MassagerOrderByWithAggregationInput {
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
  lname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MassagerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MassagerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MassagerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MassagerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MassagerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MassagerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MassagerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MassagerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MassagerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MassagerSumOrderByAggregateInput | undefined;
}
