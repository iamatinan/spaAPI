import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceUpdateOneWithoutMassagerInput } from "../inputs/Recive_serviceUpdateOneWithoutMassagerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MassagerUpdateWithoutAppointmentInput", {
  isAbstract: true
})
export class MassagerUpdateWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  lname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  user_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceUpdateOneWithoutMassagerInput, {
    nullable: true
  })
  recive_service?: Recive_serviceUpdateOneWithoutMassagerInput | undefined;
}
