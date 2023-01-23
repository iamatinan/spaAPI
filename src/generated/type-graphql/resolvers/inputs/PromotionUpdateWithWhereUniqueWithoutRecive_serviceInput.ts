import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionUpdateWithoutRecive_serviceInput } from "../inputs/PromotionUpdateWithoutRecive_serviceInput";
import { PromotionWhereUniqueInput } from "../inputs/PromotionWhereUniqueInput";

@TypeGraphQL.InputType("PromotionUpdateWithWhereUniqueWithoutRecive_serviceInput", {
  isAbstract: true
})
export class PromotionUpdateWithWhereUniqueWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => PromotionWhereUniqueInput, {
    nullable: false
  })
  where!: PromotionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PromotionUpdateWithoutRecive_serviceInput, {
    nullable: false
  })
  data!: PromotionUpdateWithoutRecive_serviceInput;
}
