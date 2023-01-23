import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerAvgAggregate } from "../outputs/CustommerAvgAggregate";
import { CustommerCountAggregate } from "../outputs/CustommerCountAggregate";
import { CustommerMaxAggregate } from "../outputs/CustommerMaxAggregate";
import { CustommerMinAggregate } from "../outputs/CustommerMinAggregate";
import { CustommerSumAggregate } from "../outputs/CustommerSumAggregate";

@TypeGraphQL.ObjectType("CustommerGroupBy", {
  isAbstract: true
})
export class CustommerGroupBy {
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

  @TypeGraphQL.Field(_type => CustommerCountAggregate, {
    nullable: true
  })
  _count!: CustommerCountAggregate | null;

  @TypeGraphQL.Field(_type => CustommerAvgAggregate, {
    nullable: true
  })
  _avg!: CustommerAvgAggregate | null;

  @TypeGraphQL.Field(_type => CustommerSumAggregate, {
    nullable: true
  })
  _sum!: CustommerSumAggregate | null;

  @TypeGraphQL.Field(_type => CustommerMinAggregate, {
    nullable: true
  })
  _min!: CustommerMinAggregate | null;

  @TypeGraphQL.Field(_type => CustommerMaxAggregate, {
    nullable: true
  })
  _max!: CustommerMaxAggregate | null;
}
