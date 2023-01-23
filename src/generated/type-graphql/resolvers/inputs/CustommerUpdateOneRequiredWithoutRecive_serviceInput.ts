import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerCreateOrConnectWithoutRecive_serviceInput } from "../inputs/CustommerCreateOrConnectWithoutRecive_serviceInput";
import { CustommerCreateWithoutRecive_serviceInput } from "../inputs/CustommerCreateWithoutRecive_serviceInput";
import { CustommerUpdateWithoutRecive_serviceInput } from "../inputs/CustommerUpdateWithoutRecive_serviceInput";
import { CustommerUpsertWithoutRecive_serviceInput } from "../inputs/CustommerUpsertWithoutRecive_serviceInput";
import { CustommerWhereUniqueInput } from "../inputs/CustommerWhereUniqueInput";

@TypeGraphQL.InputType("CustommerUpdateOneRequiredWithoutRecive_serviceInput", {
  isAbstract: true
})
export class CustommerUpdateOneRequiredWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => CustommerCreateWithoutRecive_serviceInput, {
    nullable: true
  })
  create?: CustommerCreateWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => CustommerCreateOrConnectWithoutRecive_serviceInput, {
    nullable: true
  })
  connectOrCreate?: CustommerCreateOrConnectWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => CustommerUpsertWithoutRecive_serviceInput, {
    nullable: true
  })
  upsert?: CustommerUpsertWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => CustommerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustommerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustommerUpdateWithoutRecive_serviceInput, {
    nullable: true
  })
  update?: CustommerUpdateWithoutRecive_serviceInput | undefined;
}
