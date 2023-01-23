import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionWhereUniqueInput } from "../../../inputs/PromotionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePromotionArgs {
  @TypeGraphQL.Field(_type => PromotionWhereUniqueInput, {
    nullable: false
  })
  where!: PromotionWhereUniqueInput;
}
