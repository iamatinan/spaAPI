import * as TypeGraphQL from "type-graphql";
import { Appointment } from "../../../models/Appointment";
import { Custommer } from "../../../models/Custommer";
import { Massager } from "../../../models/Massager";
import { Recive_service } from "../../../models/Recive_service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Appointment)
export class AppointmentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Custommer, {
    nullable: false
  })
  async custommer(@TypeGraphQL.Root() appointment: Appointment, @TypeGraphQL.Ctx() ctx: any): Promise<Custommer> {
    return getPrismaFromContext(ctx).appointment.findUnique({
      where: {
        id: appointment.id,
      },
    }).custommer({});
  }

  @TypeGraphQL.FieldResolver(_type => Massager, {
    nullable: false
  })
  async massager(@TypeGraphQL.Root() appointment: Appointment, @TypeGraphQL.Ctx() ctx: any): Promise<Massager> {
    return getPrismaFromContext(ctx).appointment.findUnique({
      where: {
        id: appointment.id,
      },
    }).massager({});
  }

  @TypeGraphQL.FieldResolver(_type => Recive_service, {
    nullable: true
  })
  async recive_service(@TypeGraphQL.Root() appointment: Appointment, @TypeGraphQL.Ctx() ctx: any): Promise<Recive_service | null> {
    return getPrismaFromContext(ctx).appointment.findUnique({
      where: {
        id: appointment.id,
      },
    }).recive_service({});
  }
}
