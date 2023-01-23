import * as TypeGraphQL from "type-graphql";
import { Appointment } from "../../../models/Appointment";
import { Custommer } from "../../../models/Custommer";
import { Recive_service } from "../../../models/Recive_service";
import { CustommerAppointmentArgs } from "./args/CustommerAppointmentArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Custommer)
export class CustommerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Appointment], {
    nullable: false
  })
  async appointment(@TypeGraphQL.Root() custommer: Custommer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustommerAppointmentArgs): Promise<Appointment[]> {
    return getPrismaFromContext(ctx).custommer.findUnique({
      where: {
        id: custommer.id,
      },
    }).appointment(args);
  }

  @TypeGraphQL.FieldResolver(_type => Recive_service, {
    nullable: true
  })
  async recive_service(@TypeGraphQL.Root() custommer: Custommer, @TypeGraphQL.Ctx() ctx: any): Promise<Recive_service | null> {
    return getPrismaFromContext(ctx).custommer.findUnique({
      where: {
        id: custommer.id,
      },
    }).recive_service({});
  }
}
