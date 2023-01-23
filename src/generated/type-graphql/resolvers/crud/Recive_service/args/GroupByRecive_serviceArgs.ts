import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Recive_serviceOrderByWithAggregationInput } from "../../../inputs/Recive_serviceOrderByWithAggregationInput";
import { Recive_serviceScalarWhereWithAggregatesInput } from "../../../inputs/Recive_serviceScalarWhereWithAggregatesInput";
import { Recive_serviceWhereInput } from "../../../inputs/Recive_serviceWhereInput";
import { Recive_serviceScalarFieldEnum } from "../../../../enums/Recive_serviceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRecive_serviceArgs {
  @TypeGraphQL.Field(_type => Recive_serviceWhereInput, {
    nullable: true
  })
  where?: Recive_serviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Recive_serviceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "appointment_id" | "customer_id" | "massager_id">;

  @TypeGraphQL.Field(_type => Recive_serviceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Recive_serviceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
