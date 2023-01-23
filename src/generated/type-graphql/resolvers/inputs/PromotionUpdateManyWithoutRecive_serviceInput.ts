import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionCreateOrConnectWithoutRecive_serviceInput } from "../inputs/PromotionCreateOrConnectWithoutRecive_serviceInput";
import { PromotionCreateWithoutRecive_serviceInput } from "../inputs/PromotionCreateWithoutRecive_serviceInput";
import { PromotionScalarWhereInput } from "../inputs/PromotionScalarWhereInput";
import { PromotionUpdateManyWithWhereWithoutRecive_serviceInput } from "../inputs/PromotionUpdateManyWithWhereWithoutRecive_serviceInput";
import { PromotionUpdateWithWhereUniqueWithoutRecive_serviceInput } from "../inputs/PromotionUpdateWithWhereUniqueWithoutRecive_serviceInput";
import { PromotionUpsertWithWhereUniqueWithoutRecive_serviceInput } from "../inputs/PromotionUpsertWithWhereUniqueWithoutRecive_serviceInput";
import { PromotionWhereUniqueInput } from "../inputs/PromotionWhereUniqueInput";

@TypeGraphQL.InputType("PromotionUpdateManyWithoutRecive_serviceInput", {
  isAbstract: true
})
export class PromotionUpdateManyWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => [PromotionCreateWithoutRecive_serviceInput], {
    nullable: true
  })
  create?: PromotionCreateWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionCreateOrConnectWithoutRecive_serviceInput], {
    nullable: true
  })
  connectOrCreate?: PromotionCreateOrConnectWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionUpsertWithWhereUniqueWithoutRecive_serviceInput], {
    nullable: true
  })
  upsert?: PromotionUpsertWithWhereUniqueWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionWhereUniqueInput], {
    nullable: true
  })
  set?: PromotionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PromotionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionWhereUniqueInput], {
    nullable: true
  })
  delete?: PromotionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionWhereUniqueInput], {
    nullable: true
  })
  connect?: PromotionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionUpdateWithWhereUniqueWithoutRecive_serviceInput], {
    nullable: true
  })
  update?: PromotionUpdateWithWhereUniqueWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionUpdateManyWithWhereWithoutRecive_serviceInput], {
    nullable: true
  })
  updateMany?: PromotionUpdateManyWithWhereWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PromotionScalarWhereInput[] | undefined;
}
