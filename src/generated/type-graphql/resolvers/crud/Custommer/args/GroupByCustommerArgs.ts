import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustommerOrderByWithAggregationInput } from "../../../inputs/CustommerOrderByWithAggregationInput";
import { CustommerScalarWhereWithAggregatesInput } from "../../../inputs/CustommerScalarWhereWithAggregatesInput";
import { CustommerWhereInput } from "../../../inputs/CustommerWhereInput";
import { CustommerScalarFieldEnum } from "../../../../enums/CustommerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustommerArgs {
  @TypeGraphQL.Field(_type => CustommerWhereInput, {
    nullable: true
  })
  where?: CustommerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustommerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CustommerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustommerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "Lname" | "email" | "phone" | "address" | "create_at">;

  @TypeGraphQL.Field(_type => CustommerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CustommerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
