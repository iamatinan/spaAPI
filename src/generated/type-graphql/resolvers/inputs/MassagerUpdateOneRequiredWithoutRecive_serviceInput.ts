import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerCreateOrConnectWithoutRecive_serviceInput } from "../inputs/MassagerCreateOrConnectWithoutRecive_serviceInput";
import { MassagerCreateWithoutRecive_serviceInput } from "../inputs/MassagerCreateWithoutRecive_serviceInput";
import { MassagerUpdateWithoutRecive_serviceInput } from "../inputs/MassagerUpdateWithoutRecive_serviceInput";
import { MassagerUpsertWithoutRecive_serviceInput } from "../inputs/MassagerUpsertWithoutRecive_serviceInput";
import { MassagerWhereUniqueInput } from "../inputs/MassagerWhereUniqueInput";

@TypeGraphQL.InputType("MassagerUpdateOneRequiredWithoutRecive_serviceInput", {
  isAbstract: true
})
export class MassagerUpdateOneRequiredWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => MassagerCreateWithoutRecive_serviceInput, {
    nullable: true
  })
  create?: MassagerCreateWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => MassagerCreateOrConnectWithoutRecive_serviceInput, {
    nullable: true
  })
  connectOrCreate?: MassagerCreateOrConnectWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => MassagerUpsertWithoutRecive_serviceInput, {
    nullable: true
  })
  upsert?: MassagerUpsertWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => MassagerWhereUniqueInput, {
    nullable: true
  })
  connect?: MassagerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MassagerUpdateWithoutRecive_serviceInput, {
    nullable: true
  })
  update?: MassagerUpdateWithoutRecive_serviceInput | undefined;
}
