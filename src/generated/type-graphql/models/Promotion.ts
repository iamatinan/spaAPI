import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Recive_service } from "../models/Recive_service";
import { PromotionCount } from "../resolvers/outputs/PromotionCount";

@TypeGraphQL.ObjectType("Promotion", {
  isAbstract: true
})
export class Promotion {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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
    nullable: false
  })
  create_at!: Date;

  recive_service?: Recive_service[];

  @TypeGraphQL.Field(_type => PromotionCount, {
    nullable: true
  })
  _count?: PromotionCount | null;
}
