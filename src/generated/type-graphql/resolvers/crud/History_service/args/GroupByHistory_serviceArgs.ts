import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { History_serviceOrderByWithAggregationInput } from "../../../inputs/History_serviceOrderByWithAggregationInput";
import { History_serviceScalarWhereWithAggregatesInput } from "../../../inputs/History_serviceScalarWhereWithAggregatesInput";
import { History_serviceWhereInput } from "../../../inputs/History_serviceWhereInput";
import { History_serviceScalarFieldEnum } from "../../../../enums/History_serviceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByHistory_serviceArgs {
  @TypeGraphQL.Field(_type => History_serviceWhereInput, {
    nullable: true
  })
  where?: History_serviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [History_serviceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: History_serviceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [History_serviceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "custommer_id" | "note" | "receip_id" | "create_at">;

  @TypeGraphQL.Field(_type => History_serviceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: History_serviceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
