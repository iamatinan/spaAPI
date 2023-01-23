import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutServiceInput } from "../inputs/Recive_serviceCreateOrConnectWithoutServiceInput";
import { Recive_serviceCreateWithoutServiceInput } from "../inputs/Recive_serviceCreateWithoutServiceInput";
import { Recive_serviceScalarWhereInput } from "../inputs/Recive_serviceScalarWhereInput";
import { Recive_serviceUpdateManyWithWhereWithoutServiceInput } from "../inputs/Recive_serviceUpdateManyWithWhereWithoutServiceInput";
import { Recive_serviceUpdateWithWhereUniqueWithoutServiceInput } from "../inputs/Recive_serviceUpdateWithWhereUniqueWithoutServiceInput";
import { Recive_serviceUpsertWithWhereUniqueWithoutServiceInput } from "../inputs/Recive_serviceUpsertWithWhereUniqueWithoutServiceInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceUpdateManyWithoutServiceInput", {
  isAbstract: true
})
export class Recive_serviceUpdateManyWithoutServiceInput {
  @TypeGraphQL.Field(_type => [Recive_serviceCreateWithoutServiceInput], {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceCreateOrConnectWithoutServiceInput], {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceUpsertWithWhereUniqueWithoutServiceInput], {
    nullable: true
  })
  upsert?: Recive_serviceUpsertWithWhereUniqueWithoutServiceInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [Recive_serviceUpdateWithWhereUniqueWithoutServiceInput], {
    nullable: true
  })
  update?: Recive_serviceUpdateWithWhereUniqueWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceUpdateManyWithWhereWithoutServiceInput], {
    nullable: true
  })
  updateMany?: Recive_serviceUpdateManyWithWhereWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Recive_serviceScalarWhereInput[] | undefined;
}
