import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutPromotionInput } from "../inputs/Recive_serviceCreateOrConnectWithoutPromotionInput";
import { Recive_serviceCreateWithoutPromotionInput } from "../inputs/Recive_serviceCreateWithoutPromotionInput";
import { Recive_serviceScalarWhereInput } from "../inputs/Recive_serviceScalarWhereInput";
import { Recive_serviceUpdateManyWithWhereWithoutPromotionInput } from "../inputs/Recive_serviceUpdateManyWithWhereWithoutPromotionInput";
import { Recive_serviceUpdateWithWhereUniqueWithoutPromotionInput } from "../inputs/Recive_serviceUpdateWithWhereUniqueWithoutPromotionInput";
import { Recive_serviceUpsertWithWhereUniqueWithoutPromotionInput } from "../inputs/Recive_serviceUpsertWithWhereUniqueWithoutPromotionInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceUpdateManyWithoutPromotionInput", {
  isAbstract: true
})
export class Recive_serviceUpdateManyWithoutPromotionInput {
  @TypeGraphQL.Field(_type => [Recive_serviceCreateWithoutPromotionInput], {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceCreateOrConnectWithoutPromotionInput], {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceUpsertWithWhereUniqueWithoutPromotionInput], {
    nullable: true
  })
  upsert?: Recive_serviceUpsertWithWhereUniqueWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceWhereUniqueInput], {
    nullable: true
  })
  set?: Recive_serviceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Recive_serviceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceWhereUniqueInput], {
    nullable: true
  })
  delete?: Recive_serviceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceWhereUniqueInput], {
    nullable: true
  })
  connect?: Recive_serviceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceUpdateWithWhereUniqueWithoutPromotionInput], {
    nullable: true
  })
  update?: Recive_serviceUpdateWithWhereUniqueWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceUpdateManyWithWhereWithoutPromotionInput], {
    nullable: true
  })
  updateMany?: Recive_serviceUpdateManyWithWhereWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Recive_serviceScalarWhereInput[] | undefined;
}
