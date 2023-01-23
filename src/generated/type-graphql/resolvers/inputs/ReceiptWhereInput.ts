import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Recive_serviceRelationFilter } from "../inputs/Recive_serviceRelationFilter";

@TypeGraphQL.InputType("ReceiptWhereInput", {
  isAbstract: true
})
export class ReceiptWhereInput {
  @TypeGraphQL.Field(_type => [ReceiptWhereInput], {
    nullable: true
  })
  AND?: ReceiptWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceiptWhereInput], {
    nullable: true
  })
  OR?: ReceiptWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceiptWhereInput], {
    nullable: true
  })
  NOT?: ReceiptWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customer_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  create_by?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  create_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  service_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  appoint_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  promotion_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  product_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceRelationFilter, {
    nullable: true
  })
  recive_service?: Recive_serviceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  recive_service_id?: IntFilter | undefined;
}
