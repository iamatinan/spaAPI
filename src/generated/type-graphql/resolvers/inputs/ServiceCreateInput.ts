import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateNestedManyWithoutServiceInput } from "../inputs/Recive_serviceCreateNestedManyWithoutServiceInput";

@TypeGraphQL.InputType("ServiceCreateInput", {
  isAbstract: true
})
export class ServiceCreateInput {
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

  @TypeGraphQL.Field(_type => Recive_serviceCreateNestedManyWithoutServiceInput, {
    nullable: true
  })
  recive_service?: Recive_serviceCreateNestedManyWithoutServiceInput | undefined;
}
