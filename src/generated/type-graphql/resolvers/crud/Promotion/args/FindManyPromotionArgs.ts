import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionOrderByWithRelationInput } from "../../../inputs/PromotionOrderByWithRelationInput";
import { PromotionWhereInput } from "../../../inputs/PromotionWhereInput";
import { PromotionWhereUniqueInput } from "../../../inputs/PromotionWhereUniqueInput";
import { PromotionScalarFieldEnum } from "../../../../enums/PromotionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPromotionArgs {
  @TypeGraphQL.Field(_type => PromotionWhereInput, {
    nullable: true
  })
  where?: PromotionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PromotionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PromotionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PromotionWhereUniqueInput, {
    nullable: true
  })
  cursor?: PromotionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PromotionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "promption_name" | "discount_price" | "promotion_start" | "promotion_end" | "create_at"> | undefined;
}
