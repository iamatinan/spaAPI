import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutAppointmentInput } from "../inputs/Recive_serviceCreateOrConnectWithoutAppointmentInput";
import { Recive_serviceCreateWithoutAppointmentInput } from "../inputs/Recive_serviceCreateWithoutAppointmentInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateNestedOneWithoutAppointmentInput", {
  isAbstract: true
})
export class Recive_serviceCreateNestedOneWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutAppointmentInput, {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceCreateOrConnectWithoutAppointmentInput, {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: true
  })
  connect?: Recive_serviceWhereUniqueInput | undefined;
}
