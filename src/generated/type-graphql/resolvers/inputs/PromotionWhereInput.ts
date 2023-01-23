import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Recive_serviceListRelationFilter } from "../inputs/Recive_serviceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PromotionWhereInput", {
  isAbstract: true
})
export class PromotionWhereInput {
  @TypeGraphQL.Field(_type => [PromotionWhereInput], {
    nullable: true
  })
  AND?: PromotionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionWhereInput], {
    nullable: true
  })
  OR?: PromotionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionWhereInput], {
    nullable: true
  })
  NOT?: PromotionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  promption_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  discount_price?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  promotion_start?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  promotion_end?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  create_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceListRelationFilter, {
    nullable: true
  })
  recive_service?: Recive_serviceListRelationFilter | undefined;
}
