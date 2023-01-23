import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerCreateOrConnectWithoutAppointmentInput } from "../inputs/CustommerCreateOrConnectWithoutAppointmentInput";
import { CustommerCreateWithoutAppointmentInput } from "../inputs/CustommerCreateWithoutAppointmentInput";
import { CustommerWhereUniqueInput } from "../inputs/CustommerWhereUniqueInput";

@TypeGraphQL.InputType("CustommerCreateNestedOneWithoutAppointmentInput", {
  isAbstract: true
})
export class CustommerCreateNestedOneWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => CustommerCreateWithoutAppointmentInput, {
    nullable: true
  })
  create?: CustommerCreateWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => CustommerCreateOrConnectWithoutAppointmentInput, {
    nullable: true
  })
  connectOrCreate?: CustommerCreateOrConnectWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => CustommerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustommerWhereUniqueInput | undefined;
}
