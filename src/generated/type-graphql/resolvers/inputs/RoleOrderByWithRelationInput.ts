import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RoleOrderByWithRelationInput", {
  isAbstract: true
})
export class RoleOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  user?: UserOrderByRelationAggregateInput | undefined;
}
