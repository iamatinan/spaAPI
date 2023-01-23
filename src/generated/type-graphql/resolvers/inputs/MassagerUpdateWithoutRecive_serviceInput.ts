import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateManyWithoutMassagerInput } from "../inputs/AppointmentUpdateManyWithoutMassagerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MassagerUpdateWithoutRecive_serviceInput", {
  isAbstract: true
})
export class MassagerUpdateWithoutRecive_serviceInput {
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

  @TypeGraphQL.Field(_type => AppointmentUpdateManyWithoutMassagerInput, {
    nullable: true
  })
  appointment?: AppointmentUpdateManyWithoutMassagerInput | undefined;
}
