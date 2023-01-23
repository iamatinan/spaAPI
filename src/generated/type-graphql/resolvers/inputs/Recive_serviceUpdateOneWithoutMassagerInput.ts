import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutMassagerInput } from "../inputs/Recive_serviceCreateOrConnectWithoutMassagerInput";
import { Recive_serviceCreateWithoutMassagerInput } from "../inputs/Recive_serviceCreateWithoutMassagerInput";
import { Recive_serviceUpdateWithoutMassagerInput } from "../inputs/Recive_serviceUpdateWithoutMassagerInput";
import { Recive_serviceUpsertWithoutMassagerInput } from "../inputs/Recive_serviceUpsertWithoutMassagerInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceUpdateOneWithoutMassagerInput", {
  isAbstract: true
})
export class Recive_serviceUpdateOneWithoutMassagerInput {
  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutMassagerInput, {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutMassagerInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceCreateOrConnectWithoutMassagerInput, {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutMassagerInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceUpsertWithoutMassagerInput, {
    nullable: true
  })
  upsert?: Recive_serviceUpsertWithoutMassagerInput | undefined;

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

  @TypeGraphQL.Field(_type => Recive_serviceUpdateWithoutMassagerInput, {
    nullable: true
  })
  update?: Recive_serviceUpdateWithoutMassagerInput | undefined;
}
