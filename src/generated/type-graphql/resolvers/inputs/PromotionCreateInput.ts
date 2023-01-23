import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateNestedManyWithoutPromotionInput } from "../inputs/Recive_serviceCreateNestedManyWithoutPromotionInput";

@TypeGraphQL.InputType("PromotionCreateInput", {
  isAbstract: true
})
export class PromotionCreateInput {
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

  @TypeGraphQL.Field(_type => Recive_serviceCreateNestedManyWithoutPromotionInput, {
    nullable: true
  })
  recive_service?: Recive_serviceCreateNestedManyWithoutPromotionInput | undefined;
}
