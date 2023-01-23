import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyMassagerInputEnvelope } from "../inputs/AppointmentCreateManyMassagerInputEnvelope";
import { AppointmentCreateOrConnectWithoutMassagerInput } from "../inputs/AppointmentCreateOrConnectWithoutMassagerInput";
import { AppointmentCreateWithoutMassagerInput } from "../inputs/AppointmentCreateWithoutMassagerInput";
import { AppointmentScalarWhereInput } from "../inputs/AppointmentScalarWhereInput";
import { AppointmentUpdateManyWithWhereWithoutMassagerInput } from "../inputs/AppointmentUpdateManyWithWhereWithoutMassagerInput";
import { AppointmentUpdateWithWhereUniqueWithoutMassagerInput } from "../inputs/AppointmentUpdateWithWhereUniqueWithoutMassagerInput";
import { AppointmentUpsertWithWhereUniqueWithoutMassagerInput } from "../inputs/AppointmentUpsertWithWhereUniqueWithoutMassagerInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateManyWithoutMassagerInput", {
  isAbstract: true
})
export class AppointmentUpdateManyWithoutMassagerInput {
  @TypeGraphQL.Field(_type => [AppointmentCreateWithoutMassagerInput], {
    nullable: true
  })
  create?: AppointmentCreateWithoutMassagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutMassagerInput], {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutMassagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpsertWithWhereUniqueWithoutMassagerInput], {
    nullable: true
  })
  upsert?: AppointmentUpsertWithWhereUniqueWithoutMassagerInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateManyMassagerInputEnvelope, {
    nullable: true
  })
  createMany?: AppointmentCreateManyMassagerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  set?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  delete?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpdateWithWhereUniqueWithoutMassagerInput], {
    nullable: true
  })
  update?: AppointmentUpdateWithWhereUniqueWithoutMassagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpdateManyWithWhereWithoutMassagerInput], {
    nullable: true
  })
  updateMany?: AppointmentUpdateManyWithWhereWithoutMassagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AppointmentScalarWhereInput[] | undefined;
}
