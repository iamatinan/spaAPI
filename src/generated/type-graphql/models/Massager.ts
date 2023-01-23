import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Appointment } from "../models/Appointment";
import { Recive_service } from "../models/Recive_service";
import { MassagerCount } from "../resolvers/outputs/MassagerCount";

@TypeGraphQL.ObjectType("Massager", {
  isAbstract: true
})
export class Massager {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  appointment?: Appointment[];

  recive_service?: Recive_service | null;

  @TypeGraphQL.Field(_type => MassagerCount, {
    nullable: true
  })
  _count?: MassagerCount | null;
}
