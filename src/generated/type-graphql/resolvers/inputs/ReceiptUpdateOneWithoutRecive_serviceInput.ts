import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptCreateOrConnectWithoutRecive_serviceInput } from "../inputs/ReceiptCreateOrConnectWithoutRecive_serviceInput";
import { ReceiptCreateWithoutRecive_serviceInput } from "../inputs/ReceiptCreateWithoutRecive_serviceInput";
import { ReceiptUpdateWithoutRecive_serviceInput } from "../inputs/ReceiptUpdateWithoutRecive_serviceInput";
import { ReceiptUpsertWithoutRecive_serviceInput } from "../inputs/ReceiptUpsertWithoutRecive_serviceInput";
import { ReceiptWhereUniqueInput } from "../inputs/ReceiptWhereUniqueInput";

@TypeGraphQL.InputType("ReceiptUpdateOneWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ReceiptUpdateOneWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => ReceiptCreateWithoutRecive_serviceInput, {
    nullable: true
  })
  create?: ReceiptCreateWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptCreateOrConnectWithoutRecive_serviceInput, {
    nullable: true
  })
  connectOrCreate?: ReceiptCreateOrConnectWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptUpsertWithoutRecive_serviceInput, {
    nullable: true
  })
  upsert?: ReceiptUpsertWithoutRecive_serviceInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ReceiptWhereUniqueInput, {
    nullable: true
  })
  connect?: ReceiptWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptUpdateWithoutRecive_serviceInput, {
    nullable: true
  })
  update?: ReceiptUpdateWithoutRecive_serviceInput | undefined;
}
