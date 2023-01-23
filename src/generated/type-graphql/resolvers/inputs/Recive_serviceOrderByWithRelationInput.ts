import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentOrderByWithRelationInput } from "../inputs/AppointmentOrderByWithRelationInput";
import { CustommerOrderByWithRelationInput } from "../inputs/CustommerOrderByWithRelationInput";
import { MassagerOrderByWithRelationInput } from "../inputs/MassagerOrderByWithRelationInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
import { PromotionOrderByRelationAggregateInput } from "../inputs/PromotionOrderByRelationAggregateInput";
import { ReceiptOrderByWithRelationInput } from "../inputs/ReceiptOrderByWithRelationInput";
import { ServiceOrderByRelationAggregateInput } from "../inputs/ServiceOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Recive_serviceOrderByWithRelationInput", {
  isAbstract: true
})
export class Recive_serviceOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AppointmentOrderByWithRelationInput, {
    nullable: true
  })
  appointment?: AppointmentOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appointment_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustommerOrderByWithRelationInput, {
    nullable: true
  })
  customer?: CustommerOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MassagerOrderByWithRelationInput, {
    nullable: true
  })
  massager?: MassagerOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  massager_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput, {
    nullable: true
  })
  product?: ProductOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PromotionOrderByRelationAggregateInput, {
    nullable: true
  })
  promotion?: PromotionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ServiceOrderByRelationAggregateInput, {
    nullable: true
  })
  service?: ServiceOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptOrderByWithRelationInput, {
    nullable: true
  })
  receipt?: ReceiptOrderByWithRelationInput | undefined;
}
