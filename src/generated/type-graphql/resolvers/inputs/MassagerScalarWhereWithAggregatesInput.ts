import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MassagerScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MassagerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MassagerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MassagerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MassagerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MassagerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MassagerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MassagerScalarWhereWithAggregatesInput[] | undefined;

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
  lname?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_id?: StringWithAggregatesFilter | undefined;
}
