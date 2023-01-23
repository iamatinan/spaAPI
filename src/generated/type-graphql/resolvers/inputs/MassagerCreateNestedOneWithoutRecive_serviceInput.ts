import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerCreateOrConnectWithoutRecive_serviceInput } from "../inputs/MassagerCreateOrConnectWithoutRecive_serviceInput";
import { MassagerCreateWithoutRecive_serviceInput } from "../inputs/MassagerCreateWithoutRecive_serviceInput";
import { MassagerWhereUniqueInput } from "../inputs/MassagerWhereUniqueInput";

@TypeGraphQL.InputType("MassagerCreateNestedOneWithoutRecive_serviceInput", {
  isAbstract: true
})
export class MassagerCreateNestedOneWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => MassagerCreateWithoutRecive_serviceInput, {
    nullable: true
  })
  create?: MassagerCreateWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => MassagerCreateOrConnectWithoutRecive_serviceInput, {
    nullable: true
  })
  connectOrCreate?: MassagerCreateOrConnectWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => MassagerWhereUniqueInput, {
    nullable: true
  })
  connect?: MassagerWhereUniqueInput | undefined;
}
