import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Recive_serviceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Recive_serviceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Recive_serviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Recive_serviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Recive_serviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Recive_serviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  appointment_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  customer_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  massager_id?: IntWithAggregatesFilter | undefined;
}
