import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceUpdateWithoutPromotionInput } from "../inputs/Recive_serviceUpdateWithoutPromotionInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceUpdateWithWhereUniqueWithoutPromotionInput", {
  isAbstract: true
})
export class Recive_serviceUpdateWithWhereUniqueWithoutPromotionInput {
  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Recive_serviceUpdateWithoutPromotionInput, {
    nullable: false
  })
  data!: Recive_serviceUpdateWithoutPromotionInput;
}
