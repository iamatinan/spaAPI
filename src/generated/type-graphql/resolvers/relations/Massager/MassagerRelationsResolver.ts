import * as TypeGraphQL from "type-graphql";
import { Appointment } from "../../../models/Appointment";
import { Massager } from "../../../models/Massager";
import { Recive_service } from "../../../models/Recive_service";
import { MassagerAppointmentArgs } from "./args/MassagerAppointmentArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Massager)
export class MassagerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Appointment], {
    nullable: false
  })
  async appointment(@TypeGraphQL.Root() massager: Massager, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MassagerAppointmentArgs): Promise<Appointment[]> {
    return getPrismaFromContext(ctx).massager.findUnique({
      where: {
        id: massager.id,
      },
    }).appointment(args);
  }

  @TypeGraphQL.FieldResolver(_type => Recive_service, {
    nullable: true
  })
  async recive_service(@TypeGraphQL.Root() massager: Massager, @TypeGraphQL.Ctx() ctx: any): Promise<Recive_service | null> {
    return getPrismaFromContext(ctx).massager.findUnique({
      where: {
        id: massager.id,
      },
    }).recive_service({});
  }
}
