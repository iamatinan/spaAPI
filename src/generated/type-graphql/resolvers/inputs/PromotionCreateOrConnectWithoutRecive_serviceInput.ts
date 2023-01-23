import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionCreateWithoutRecive_serviceInput } from "../inputs/PromotionCreateWithoutRecive_serviceInput";
import { PromotionWhereUniqueInput } from "../inputs/PromotionWhereUniqueInput";

@TypeGraphQL.InputType("PromotionCreateOrConnectWithoutRecive_serviceInput", {
  isAbstract: true
})
export class PromotionCreateOrConnectWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => PromotionWhereUniqueInput, {
    nullable: false
  })
  where!: PromotionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PromotionCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: PromotionCreateWithoutRecive_serviceInput;
}
