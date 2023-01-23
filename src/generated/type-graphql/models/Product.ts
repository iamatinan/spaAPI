import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Recive_service } from "../models/Recive_service";
import { ProductCount } from "../resolvers/outputs/ProductCount";

@TypeGraphQL.ObjectType("Product", {
  isAbstract: true
})
export class Product {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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
    nullable: false
  })
  create_at!: Date;

  recive_service?: Recive_service[];

  @TypeGraphQL.Field(_type => ProductCount, {
    nullable: true
  })
  _count?: ProductCount | null;
}
