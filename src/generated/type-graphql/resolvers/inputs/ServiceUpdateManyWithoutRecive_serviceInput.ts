import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateOrConnectWithoutRecive_serviceInput } from "../inputs/ServiceCreateOrConnectWithoutRecive_serviceInput";
import { ServiceCreateWithoutRecive_serviceInput } from "../inputs/ServiceCreateWithoutRecive_serviceInput";
import { ServiceScalarWhereInput } from "../inputs/ServiceScalarWhereInput";
import { ServiceUpdateManyWithWhereWithoutRecive_serviceInput } from "../inputs/ServiceUpdateManyWithWhereWithoutRecive_serviceInput";
import { ServiceUpdateWithWhereUniqueWithoutRecive_serviceInput } from "../inputs/ServiceUpdateWithWhereUniqueWithoutRecive_serviceInput";
import { ServiceUpsertWithWhereUniqueWithoutRecive_serviceInput } from "../inputs/ServiceUpsertWithWhereUniqueWithoutRecive_serviceInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceUpdateManyWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ServiceUpdateManyWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => [ServiceCreateWithoutRecive_serviceInput], {
    nullable: true
  })
  create?: ServiceCreateWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceCreateOrConnectWithoutRecive_serviceInput], {
    nullable: true
  })
  connectOrCreate?: ServiceCreateOrConnectWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceUpsertWithWhereUniqueWithoutRecive_serviceInput], {
    nullable: true
  })
  upsert?: ServiceUpsertWithWhereUniqueWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereUniqueInput], {
    nullable: true
  })
  set?: ServiceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ServiceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereUniqueInput], {
    nullable: true
  })
  delete?: ServiceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereUniqueInput], {
    nullable: true
  })
  connect?: ServiceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceUpdateWithWhereUniqueWithoutRecive_serviceInput], {
    nullable: true
  })
  update?: ServiceUpdateWithWhereUniqueWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceUpdateManyWithWhereWithoutRecive_serviceInput], {
    nullable: true
  })
  updateMany?: ServiceUpdateManyWithWhereWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ServiceScalarWhereInput[] | undefined;
}
