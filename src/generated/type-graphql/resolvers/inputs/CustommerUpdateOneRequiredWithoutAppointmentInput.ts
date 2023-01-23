import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerCreateOrConnectWithoutAppointmentInput } from "../inputs/CustommerCreateOrConnectWithoutAppointmentInput";
import { CustommerCreateWithoutAppointmentInput } from "../inputs/CustommerCreateWithoutAppointmentInput";
import { CustommerUpdateWithoutAppointmentInput } from "../inputs/CustommerUpdateWithoutAppointmentInput";
import { CustommerUpsertWithoutAppointmentInput } from "../inputs/CustommerUpsertWithoutAppointmentInput";
import { CustommerWhereUniqueInput } from "../inputs/CustommerWhereUniqueInput";

@TypeGraphQL.InputType("CustommerUpdateOneRequiredWithoutAppointmentInput", {
  isAbstract: true
})
export class CustommerUpdateOneRequiredWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => CustommerCreateWithoutAppointmentInput, {
    nullable: true
  })
  create?: CustommerCreateWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => CustommerCreateOrConnectWithoutAppointmentInput, {
    nullable: true
  })
  connectOrCreate?: CustommerCreateOrConnectWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => CustommerUpsertWithoutAppointmentInput, {
    nullable: true
  })
  upsert?: CustommerUpsertWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => CustommerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustommerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustommerUpdateWithoutAppointmentInput, {
    nullable: true
  })
  update?: CustommerUpdateWithoutAppointmentInput | undefined;
}
