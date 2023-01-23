import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerCreateOrConnectWithoutAppointmentInput } from "../inputs/MassagerCreateOrConnectWithoutAppointmentInput";
import { MassagerCreateWithoutAppointmentInput } from "../inputs/MassagerCreateWithoutAppointmentInput";
import { MassagerWhereUniqueInput } from "../inputs/MassagerWhereUniqueInput";

@TypeGraphQL.InputType("MassagerCreateNestedOneWithoutAppointmentInput", {
  isAbstract: true
})
export class MassagerCreateNestedOneWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => MassagerCreateWithoutAppointmentInput, {
    nullable: true
  })
  create?: MassagerCreateWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => MassagerCreateOrConnectWithoutAppointmentInput, {
    nullable: true
  })
  connectOrCreate?: MassagerCreateOrConnectWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => MassagerWhereUniqueInput, {
    nullable: true
  })
  connect?: MassagerWhereUniqueInput | undefined;
}
