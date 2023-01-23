import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutRecive_serviceInput } from "../inputs/ProductCreateOrConnectWithoutRecive_serviceInput";
import { ProductCreateWithoutRecive_serviceInput } from "../inputs/ProductCreateWithoutRecive_serviceInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutRecive_serviceInput } from "../inputs/ProductUpdateManyWithWhereWithoutRecive_serviceInput";
import { ProductUpdateWithWhereUniqueWithoutRecive_serviceInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutRecive_serviceInput";
import { ProductUpsertWithWhereUniqueWithoutRecive_serviceInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutRecive_serviceInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ProductUpdateManyWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutRecive_serviceInput], {
    nullable: true
  })
  create?: ProductCreateWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutRecive_serviceInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutRecive_serviceInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  set?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutRecive_serviceInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutRecive_serviceInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
