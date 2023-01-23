import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateNestedManyWithoutProductInput } from "../inputs/Recive_serviceCreateNestedManyWithoutProductInput";

@TypeGraphQL.InputType("ProductCreateInput", {
  isAbstract: true
})
export class ProductCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  product!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  product_price!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  create_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  recive_service?: Recive_serviceCreateNestedManyWithoutProductInput | undefined;
}
