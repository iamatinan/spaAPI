import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerCreateOrConnectWithoutAppointmentInput } from "../inputs/MassagerCreateOrConnectWithoutAppointmentInput";
import { MassagerCreateWithoutAppointmentInput } from "../inputs/MassagerCreateWithoutAppointmentInput";
import { MassagerUpdateWithoutAppointmentInput } from "../inputs/MassagerUpdateWithoutAppointmentInput";
import { MassagerUpsertWithoutAppointmentInput } from "../inputs/MassagerUpsertWithoutAppointmentInput";
import { MassagerWhereUniqueInput } from "../inputs/MassagerWhereUniqueInput";

@TypeGraphQL.InputType("MassagerUpdateOneRequiredWithoutAppointmentInput", {
  isAbstract: true
})
export class MassagerUpdateOneRequiredWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => MassagerCreateWithoutAppointmentInput, {
    nullable: true
  })
  create?: MassagerCreateWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => MassagerCreateOrConnectWithoutAppointmentInput, {
    nullable: true
  })
  connectOrCreate?: MassagerCreateOrConnectWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => MassagerUpsertWithoutAppointmentInput, {
    nullable: true
  })
  upsert?: MassagerUpsertWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => MassagerWhereUniqueInput, {
    nullable: true
  })
  connect?: MassagerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MassagerUpdateWithoutAppointmentInput, {
    nullable: true
  })
  update?: MassagerUpdateWithoutAppointmentInput | undefined;
}
