import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateWithoutPromotionInput } from "../inputs/Recive_serviceCreateWithoutPromotionInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateOrConnectWithoutPromotionInput", {
  isAbstract: true
})
export class Recive_serviceCreateOrConnectWithoutPromotionInput {
  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutPromotionInput, {
    nullable: false
  })
  create!: Recive_serviceCreateWithoutPromotionInput;
}
