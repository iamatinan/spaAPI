import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutProductInput } from "../inputs/Recive_serviceCreateOrConnectWithoutProductInput";
import { Recive_serviceCreateWithoutProductInput } from "../inputs/Recive_serviceCreateWithoutProductInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateNestedManyWithoutProductInput", {
  isAbstract: true
})
export class Recive_serviceCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Recive_serviceCreateWithoutProductInput], {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceWhereUniqueInput], {
    nullable: true
  })
  connect?: Recive_serviceWhereUniqueInput[] | undefined;
}
