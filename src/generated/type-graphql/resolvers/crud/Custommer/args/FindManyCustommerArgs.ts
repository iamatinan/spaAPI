import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustommerOrderByWithRelationInput } from "../../../inputs/CustommerOrderByWithRelationInput";
import { CustommerWhereInput } from "../../../inputs/CustommerWhereInput";
import { CustommerWhereUniqueInput } from "../../../inputs/CustommerWhereUniqueInput";
import { CustommerScalarFieldEnum } from "../../../../enums/CustommerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCustommerArgs {
  @TypeGraphQL.Field(_type => CustommerWhereInput, {
    nullable: true
  })
  where?: CustommerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustommerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CustommerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CustommerWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustommerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CustommerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "Lname" | "email" | "phone" | "address" | "create_at"> | undefined;
}
