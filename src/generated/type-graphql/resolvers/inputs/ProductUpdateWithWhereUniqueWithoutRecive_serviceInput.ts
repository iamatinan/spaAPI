import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutRecive_serviceInput } from "../inputs/ProductUpdateWithoutRecive_serviceInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ProductUpdateWithWhereUniqueWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutRecive_serviceInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutRecive_serviceInput;
}
