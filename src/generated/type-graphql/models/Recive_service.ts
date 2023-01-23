import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Appointment } from "../models/Appointment";
import { Custommer } from "../models/Custommer";
import { Massager } from "../models/Massager";
import { Product } from "../models/Product";
import { Promotion } from "../models/Promotion";
import { Receipt } from "../models/Receipt";
import { Service } from "../models/Service";
import { Recive_serviceCount } from "../resolvers/outputs/Recive_serviceCount";

@TypeGraphQL.ObjectType("Recive_service", {
  isAbstract: true
})
export class Recive_service {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  appointment?: Appointment;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  appointment_id!: number;

  customer?: Custommer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customer_id!: number;

  massager?: Massager;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  massager_id!: number;

  product?: Product[];

  promotion?: Promotion[];

  service?: Service[];

  receipt?: Receipt | null;

  @TypeGraphQL.Field(_type => Recive_serviceCount, {
    nullable: true
  })
  _count?: Recive_serviceCount | null;
}
