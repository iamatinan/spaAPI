import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyMassagerInputEnvelope } from "../inputs/AppointmentCreateManyMassagerInputEnvelope";
import { AppointmentCreateOrConnectWithoutMassagerInput } from "../inputs/AppointmentCreateOrConnectWithoutMassagerInput";
import { AppointmentCreateWithoutMassagerInput } from "../inputs/AppointmentCreateWithoutMassagerInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateNestedManyWithoutMassagerInput", {
  isAbstract: true
})
export class AppointmentCreateNestedManyWithoutMassagerInput {
  @TypeGraphQL.Field(_type => [AppointmentCreateWithoutMassagerInput], {
    nullable: true
  })
  create?: AppointmentCreateWithoutMassagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutMassagerInput], {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutMassagerInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateManyMassagerInputEnvelope, {
    nullable: true
  })
  createMany?: AppointmentCreateManyMassagerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput[] | undefined;
}
