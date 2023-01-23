import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutProductInput } from "../inputs/Recive_serviceCreateOrConnectWithoutProductInput";
import { Recive_serviceCreateWithoutProductInput } from "../inputs/Recive_serviceCreateWithoutProductInput";
import { Recive_serviceScalarWhereInput } from "../inputs/Recive_serviceScalarWhereInput";
import { Recive_serviceUpdateManyWithWhereWithoutProductInput } from "../inputs/Recive_serviceUpdateManyWithWhereWithoutProductInput";
import { Recive_serviceUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Recive_serviceUpdateWithWhereUniqueWithoutProductInput";
import { Recive_serviceUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Recive_serviceUpsertWithWhereUniqueWithoutProductInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceUpdateManyWithoutProductInput", {
  isAbstract: true
})
export class Recive_serviceUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Recive_serviceCreateWithoutProductInput], {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Recive_serviceUpsertWithWhereUniqueWithoutProductInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [Recive_serviceUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Recive_serviceUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Recive_serviceUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Recive_serviceScalarWhereInput[] | undefined;
}
