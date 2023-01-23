import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceAvgOrderByAggregateInput } from "../inputs/Recive_serviceAvgOrderByAggregateInput";
import { Recive_serviceCountOrderByAggregateInput } from "../inputs/Recive_serviceCountOrderByAggregateInput";
import { Recive_serviceMaxOrderByAggregateInput } from "../inputs/Recive_serviceMaxOrderByAggregateInput";
import { Recive_serviceMinOrderByAggregateInput } from "../inputs/Recive_serviceMinOrderByAggregateInput";
import { Recive_serviceSumOrderByAggregateInput } from "../inputs/Recive_serviceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Recive_serviceOrderByWithAggregationInput", {
  isAbstract: true
})
export class Recive_serviceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appointment_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  massager_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Recive_serviceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Recive_serviceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Recive_serviceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Recive_serviceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Recive_serviceSumOrderByAggregateInput | undefined;
}
