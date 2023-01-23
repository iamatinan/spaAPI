import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Recive_service } from "../models/Recive_service";
import { ServiceCount } from "../resolvers/outputs/ServiceCount";

@TypeGraphQL.ObjectType("Service", {
  isAbstract: true
})
export class Service {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  service_name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  create_at!: Date;

  recive_service?: Recive_service[];

  @TypeGraphQL.Field(_type => ServiceCount, {
    nullable: true
  })
  _count?: ServiceCount | null;
}
