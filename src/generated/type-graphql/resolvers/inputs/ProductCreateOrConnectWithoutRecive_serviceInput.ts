import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutRecive_serviceInput } from "../inputs/ProductCreateWithoutRecive_serviceInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ProductCreateOrConnectWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: ProductCreateWithoutRecive_serviceInput;
}
