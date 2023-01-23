import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionOrderByWithRelationInput } from "../../../inputs/PromotionOrderByWithRelationInput";
import { PromotionWhereInput } from "../../../inputs/PromotionWhereInput";
import { PromotionWhereUniqueInput } from "../../../inputs/PromotionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePromotionArgs {
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
}
