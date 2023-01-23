import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Appointment } from "../models/Appointment";
import { Recive_service } from "../models/Recive_service";
import { CustommerCount } from "../resolvers/outputs/CustommerCount";

@TypeGraphQL.ObjectType("Custommer", {
  isAbstract: true
})
export class Custommer {
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
  Lname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  create_at!: Date;

  appointment?: Appointment[];

  recive_service?: Recive_service | null;

  @TypeGraphQL.Field(_type => CustommerCount, {
    nullable: true
  })
  _count?: CustommerCount | null;
}
