import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutAppointmentInput } from "../inputs/Recive_serviceCreateOrConnectWithoutAppointmentInput";
import { Recive_serviceCreateWithoutAppointmentInput } from "../inputs/Recive_serviceCreateWithoutAppointmentInput";
import { Recive_serviceUpdateWithoutAppointmentInput } from "../inputs/Recive_serviceUpdateWithoutAppointmentInput";
import { Recive_serviceUpsertWithoutAppointmentInput } from "../inputs/Recive_serviceUpsertWithoutAppointmentInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceUpdateOneWithoutAppointmentInput", {
  isAbstract: true
})
export class Recive_serviceUpdateOneWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutAppointmentInput, {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceCreateOrConnectWithoutAppointmentInput, {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceUpsertWithoutAppointmentInput, {
    nullable: true
  })
  upsert?: Recive_serviceUpsertWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: true
  })
  connect?: Recive_serviceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceUpdateWithoutAppointmentInput, {
    nullable: true
  })
  update?: Recive_serviceUpdateWithoutAppointmentInput | undefined;
}
