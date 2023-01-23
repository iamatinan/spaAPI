import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateNestedOneWithoutRecive_serviceInput } from "../inputs/AppointmentCreateNestedOneWithoutRecive_serviceInput";
import { CustommerCreateNestedOneWithoutRecive_serviceInput } from "../inputs/CustommerCreateNestedOneWithoutRecive_serviceInput";
import { MassagerCreateNestedOneWithoutRecive_serviceInput } from "../inputs/MassagerCreateNestedOneWithoutRecive_serviceInput";
import { ProductCreateNestedManyWithoutRecive_serviceInput } from "../inputs/ProductCreateNestedManyWithoutRecive_serviceInput";
import { PromotionCreateNestedManyWithoutRecive_serviceInput } from "../inputs/PromotionCreateNestedManyWithoutRecive_serviceInput";
import { ReceiptCreateNestedOneWithoutRecive_serviceInput } from "../inputs/ReceiptCreateNestedOneWithoutRecive_serviceInput";

@TypeGraphQL.InputType("Recive_serviceCreateWithoutServiceInput", {
  isAbstract: true
})
export class Recive_serviceCreateWithoutServiceInput {
  @TypeGraphQL.Field(_type => AppointmentCreateNestedOneWithoutRecive_serviceInput, {
    nullable: false
  })
  appointment!: AppointmentCreateNestedOneWithoutRecive_serviceInput;

  @TypeGraphQL.Field(_type => CustommerCreateNestedOneWithoutRecive_serviceInput, {
    nullable: false
  })
  customer!: CustommerCreateNestedOneWithoutRecive_serviceInput;

  @TypeGraphQL.Field(_type => MassagerCreateNestedOneWithoutRecive_serviceInput, {
    nullable: false
  })
  massager!: MassagerCreateNestedOneWithoutRecive_serviceInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutRecive_serviceInput, {
    nullable: true
  })
  product?: ProductCreateNestedManyWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => PromotionCreateNestedManyWithoutRecive_serviceInput, {
    nullable: true
  })
  promotion?: PromotionCreateNestedManyWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptCreateNestedOneWithoutRecive_serviceInput, {
    nullable: true
  })
  receipt?: ReceiptCreateNestedOneWithoutRecive_serviceInput | undefined;
}
