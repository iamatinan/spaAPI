import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateOrConnectWithoutRecive_serviceInput } from "../inputs/ServiceCreateOrConnectWithoutRecive_serviceInput";
import { ServiceCreateWithoutRecive_serviceInput } from "../inputs/ServiceCreateWithoutRecive_serviceInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceCreateNestedManyWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ServiceCreateNestedManyWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => [ServiceCreateWithoutRecive_serviceInput], {
    nullable: true
  })
  create?: ServiceCreateWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceCreateOrConnectWithoutRecive_serviceInput], {
    nullable: true
  })
  connectOrCreate?: ServiceCreateOrConnectWithoutRecive_serviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereUniqueInput], {
    nullable: true
  })
  connect?: ServiceWhereUniqueInput[] | undefined;
}
