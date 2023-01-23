import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MassagerOrderByWithAggregationInput } from "../../../inputs/MassagerOrderByWithAggregationInput";
import { MassagerScalarWhereWithAggregatesInput } from "../../../inputs/MassagerScalarWhereWithAggregatesInput";
import { MassagerWhereInput } from "../../../inputs/MassagerWhereInput";
import { MassagerScalarFieldEnum } from "../../../../enums/MassagerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMassagerArgs {
  @TypeGraphQL.Field(_type => MassagerWhereInput, {
    nullable: true
  })
  where?: MassagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MassagerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MassagerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MassagerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "lname" | "user_id">;

  @TypeGraphQL.Field(_type => MassagerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MassagerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
