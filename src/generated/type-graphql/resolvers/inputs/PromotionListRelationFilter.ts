import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionWhereInput } from "../inputs/PromotionWhereInput";

@TypeGraphQL.InputType("PromotionListRelationFilter", {
  isAbstract: true
})
export class PromotionListRelationFilter {
  @TypeGraphQL.Field(_type => PromotionWhereInput, {
    nullable: true
  })
  every?: PromotionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PromotionWhereInput, {
    nullable: true
  })
  some?: PromotionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PromotionWhereInput, {
    nullable: true
  })
  none?: PromotionWhereInput | undefined;
}
