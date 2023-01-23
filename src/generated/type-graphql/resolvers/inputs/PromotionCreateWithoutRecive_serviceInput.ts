import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PromotionCreateWithoutRecive_serviceInput", {
  isAbstract: true
})
export class PromotionCreateWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  promption_name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discount_price!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  promotion_start!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  promotion_end!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  create_at?: Date | undefined;
}
