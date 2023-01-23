import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { History_serviceOrderByWithRelationInput } from "../../../inputs/History_serviceOrderByWithRelationInput";
import { History_serviceWhereInput } from "../../../inputs/History_serviceWhereInput";
import { History_serviceWhereUniqueInput } from "../../../inputs/History_serviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateHistory_serviceArgs {
  @TypeGraphQL.Field(_type => History_serviceWhereInput, {
    nullable: true
  })
  where?: History_serviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [History_serviceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: History_serviceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => History_serviceWhereUniqueInput, {
    nullable: true
  })
  cursor?: History_serviceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
