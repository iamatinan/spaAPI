import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleAvgOrderByAggregateInput } from "../inputs/RoleAvgOrderByAggregateInput";
import { RoleCountOrderByAggregateInput } from "../inputs/RoleCountOrderByAggregateInput";
import { RoleMaxOrderByAggregateInput } from "../inputs/RoleMaxOrderByAggregateInput";
import { RoleMinOrderByAggregateInput } from "../inputs/RoleMinOrderByAggregateInput";
import { RoleSumOrderByAggregateInput } from "../inputs/RoleSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RoleOrderByWithAggregationInput", {
  isAbstract: true
})
export class RoleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RoleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RoleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RoleAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RoleAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RoleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RoleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RoleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RoleMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RoleSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RoleSumOrderByAggregateInput | undefined;
}
