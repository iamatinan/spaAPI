import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateOrConnectWithoutRecive_serviceInput } from "../inputs/AppointmentCreateOrConnectWithoutRecive_serviceInput";
import { AppointmentCreateWithoutRecive_serviceInput } from "../inputs/AppointmentCreateWithoutRecive_serviceInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateNestedOneWithoutRecive_serviceInput", {
  isAbstract: true
})
export class AppointmentCreateNestedOneWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => AppointmentCreateWithoutRecive_serviceInput, {
    nullable: true
  })
  create?: AppointmentCreateWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateOrConnectWithoutRecive_serviceInput, {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput | undefined;
}
