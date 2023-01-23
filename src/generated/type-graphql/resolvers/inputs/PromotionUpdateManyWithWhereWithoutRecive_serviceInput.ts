import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionScalarWhereInput } from "../inputs/PromotionScalarWhereInput";
import { PromotionUpdateManyMutationInput } from "../inputs/PromotionUpdateManyMutationInput";

@TypeGraphQL.InputType("PromotionUpdateManyWithWhereWithoutRecive_serviceInput", {
  isAbstract: true
})
export class PromotionUpdateManyWithWhereWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => PromotionScalarWhereInput, {
    nullable: false
  })
  where!: PromotionScalarWhereInput;

  @TypeGraphQL.Field(_type => PromotionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PromotionUpdateManyMutationInput;
}
