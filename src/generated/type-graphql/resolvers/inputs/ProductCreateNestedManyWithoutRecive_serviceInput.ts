import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutRecive_serviceInput } from "../inputs/ProductCreateOrConnectWithoutRecive_serviceInput";
import { ProductCreateWithoutRecive_serviceInput } from "../inputs/ProductCreateWithoutRecive_serviceInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ProductCreateNestedManyWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutRecive_serviceInput], {
    nullable: true
  })
  create?: ProductCreateWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutRecive_serviceInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
