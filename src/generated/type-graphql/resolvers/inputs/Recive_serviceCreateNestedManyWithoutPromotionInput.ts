import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutPromotionInput } from "../inputs/Recive_serviceCreateOrConnectWithoutPromotionInput";
import { Recive_serviceCreateWithoutPromotionInput } from "../inputs/Recive_serviceCreateWithoutPromotionInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateNestedManyWithoutPromotionInput", {
  isAbstract: true
})
export class Recive_serviceCreateNestedManyWithoutPromotionInput {
  @TypeGraphQL.Field(_type => [Recive_serviceCreateWithoutPromotionInput], {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceCreateOrConnectWithoutPromotionInput], {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceWhereUniqueInput], {
    nullable: true
  })
  connect?: Recive_serviceWhereUniqueInput[] | undefined;
}
