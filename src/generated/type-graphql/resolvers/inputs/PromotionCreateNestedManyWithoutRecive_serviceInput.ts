import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionCreateOrConnectWithoutRecive_serviceInput } from "../inputs/PromotionCreateOrConnectWithoutRecive_serviceInput";
import { PromotionCreateWithoutRecive_serviceInput } from "../inputs/PromotionCreateWithoutRecive_serviceInput";
import { PromotionWhereUniqueInput } from "../inputs/PromotionWhereUniqueInput";

@TypeGraphQL.InputType("PromotionCreateNestedManyWithoutRecive_serviceInput", {
  isAbstract: true
})
export class PromotionCreateNestedManyWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => [PromotionCreateWithoutRecive_serviceInput], {
    nullable: true
  })
  create?: PromotionCreateWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionCreateOrConnectWithoutRecive_serviceInput], {
    nullable: true
  })
  connectOrCreate?: PromotionCreateOrConnectWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionWhereUniqueInput], {
    nullable: true
  })
  connect?: PromotionWhereUniqueInput[] | undefined;
}
