import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateOneRequiredWithoutRecive_serviceInput } from "../inputs/AppointmentUpdateOneRequiredWithoutRecive_serviceInput";
import { CustommerUpdateOneRequiredWithoutRecive_serviceInput } from "../inputs/CustommerUpdateOneRequiredWithoutRecive_serviceInput";
import { MassagerUpdateOneRequiredWithoutRecive_serviceInput } from "../inputs/MassagerUpdateOneRequiredWithoutRecive_serviceInput";
import { ProductUpdateManyWithoutRecive_serviceInput } from "../inputs/ProductUpdateManyWithoutRecive_serviceInput";
import { PromotionUpdateManyWithoutRecive_serviceInput } from "../inputs/PromotionUpdateManyWithoutRecive_serviceInput";
import { ReceiptUpdateOneWithoutRecive_serviceInput } from "../inputs/ReceiptUpdateOneWithoutRecive_serviceInput";

@TypeGraphQL.InputType("Recive_serviceUpdateWithoutServiceInput", {
  isAbstract: true
})
export class Recive_serviceUpdateWithoutServiceInput {
  @TypeGraphQL.Field(_type => AppointmentUpdateOneRequiredWithoutRecive_serviceInput, {
    nullable: true
  })
  appointment?: AppointmentUpdateOneRequiredWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => CustommerUpdateOneRequiredWithoutRecive_serviceInput, {
    nullable: true
  })
  customer?: CustommerUpdateOneRequiredWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => MassagerUpdateOneRequiredWithoutRecive_serviceInput, {
    nullable: true
  })
  massager?: MassagerUpdateOneRequiredWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutRecive_serviceInput, {
    nullable: true
  })
  product?: ProductUpdateManyWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => PromotionUpdateManyWithoutRecive_serviceInput, {
    nullable: true
  })
  promotion?: PromotionUpdateManyWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptUpdateOneWithoutRecive_serviceInput, {
    nullable: true
  })
  receipt?: ReceiptUpdateOneWithoutRecive_serviceInput | undefined;
}
