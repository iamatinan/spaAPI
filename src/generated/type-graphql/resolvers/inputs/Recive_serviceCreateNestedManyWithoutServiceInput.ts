import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateOrConnectWithoutServiceInput } from "../inputs/Recive_serviceCreateOrConnectWithoutServiceInput";
import { Recive_serviceCreateWithoutServiceInput } from "../inputs/Recive_serviceCreateWithoutServiceInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateNestedManyWithoutServiceInput", {
  isAbstract: true
})
export class Recive_serviceCreateNestedManyWithoutServiceInput {
  @TypeGraphQL.Field(_type => [Recive_serviceCreateWithoutServiceInput], {
    nullable: true
  })
  create?: Recive_serviceCreateWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceCreateOrConnectWithoutServiceInput], {
    nullable: true
  })
  connectOrCreate?: Recive_serviceCreateOrConnectWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceWhereUniqueInput], {
    nullable: true
  })
  connect?: Recive_serviceWhereUniqueInput[] | undefined;
}
