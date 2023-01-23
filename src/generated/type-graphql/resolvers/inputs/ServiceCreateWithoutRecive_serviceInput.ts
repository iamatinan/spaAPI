import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ServiceCreateWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ServiceCreateWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  service_name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  create_at?: Date | undefined;
}
