import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateWithoutRecive_serviceInput } from "../inputs/ServiceCreateWithoutRecive_serviceInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceCreateOrConnectWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ServiceCreateOrConnectWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ServiceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ServiceCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: ServiceCreateWithoutRecive_serviceInput;
}
