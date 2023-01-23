import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentRelationFilter } from "../inputs/AppointmentRelationFilter";
import { CustommerRelationFilter } from "../inputs/CustommerRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MassagerRelationFilter } from "../inputs/MassagerRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { PromotionListRelationFilter } from "../inputs/PromotionListRelationFilter";
import { ReceiptRelationFilter } from "../inputs/ReceiptRelationFilter";
import { ServiceListRelationFilter } from "../inputs/ServiceListRelationFilter";

@TypeGraphQL.InputType("Recive_serviceWhereInput", {
  isAbstract: true
})
export class Recive_serviceWhereInput {
  @TypeGraphQL.Field(_type => [Recive_serviceWhereInput], {
    nullable: true
  })
  AND?: Recive_serviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceWhereInput], {
    nullable: true
  })
  OR?: Recive_serviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceWhereInput], {
    nullable: true
  })
  NOT?: Recive_serviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => AppointmentRelationFilter, {
    nullable: true
  })
  appointment?: AppointmentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  appointment_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CustommerRelationFilter, {
    nullable: true
  })
  customer?: CustommerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customer_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MassagerRelationFilter, {
    nullable: true
  })
  massager?: MassagerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  massager_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  product?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PromotionListRelationFilter, {
    nullable: true
  })
  promotion?: PromotionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ServiceListRelationFilter, {
    nullable: true
  })
  service?: ServiceListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReceiptRelationFilter, {
    nullable: true
  })
  receipt?: ReceiptRelationFilter | undefined;
}
