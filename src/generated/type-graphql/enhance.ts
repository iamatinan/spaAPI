import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Custommer: crudResolvers.CustommerCrudResolver,
  Role: crudResolvers.RoleCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Appointment: crudResolvers.AppointmentCrudResolver,
  Massager: crudResolvers.MassagerCrudResolver,
  Product: crudResolvers.ProductCrudResolver,
  Promotion: crudResolvers.PromotionCrudResolver,
  Receipt: crudResolvers.ReceiptCrudResolver,
  Service: crudResolvers.ServiceCrudResolver,
  History_service: crudResolvers.History_serviceCrudResolver
};
const actionResolversMap = {
  Custommer: {
    custommer: actionResolvers.FindUniqueCustommerResolver,
    findFirstCustommer: actionResolvers.FindFirstCustommerResolver,
    custommers: actionResolvers.FindManyCustommerResolver,
    createCustommer: actionResolvers.CreateCustommerResolver,
    createManyCustommer: actionResolvers.CreateManyCustommerResolver,
    deleteCustommer: actionResolvers.DeleteCustommerResolver,
    updateCustommer: actionResolvers.UpdateCustommerResolver,
    deleteManyCustommer: actionResolvers.DeleteManyCustommerResolver,
    updateManyCustommer: actionResolvers.UpdateManyCustommerResolver,
    upsertCustommer: actionResolvers.UpsertCustommerResolver,
    aggregateCustommer: actionResolvers.AggregateCustommerResolver,
    groupByCustommer: actionResolvers.GroupByCustommerResolver
  },
  Role: {
    role: actionResolvers.FindUniqueRoleResolver,
    findFirstRole: actionResolvers.FindFirstRoleResolver,
    roles: actionResolvers.FindManyRoleResolver,
    createRole: actionResolvers.CreateRoleResolver,
    createManyRole: actionResolvers.CreateManyRoleResolver,
    deleteRole: actionResolvers.DeleteRoleResolver,
    updateRole: actionResolvers.UpdateRoleResolver,
    deleteManyRole: actionResolvers.DeleteManyRoleResolver,
    updateManyRole: actionResolvers.UpdateManyRoleResolver,
    upsertRole: actionResolvers.UpsertRoleResolver,
    aggregateRole: actionResolvers.AggregateRoleResolver,
    groupByRole: actionResolvers.GroupByRoleResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Appointment: {
    appointment: actionResolvers.FindUniqueAppointmentResolver,
    findFirstAppointment: actionResolvers.FindFirstAppointmentResolver,
    appointments: actionResolvers.FindManyAppointmentResolver,
    createAppointment: actionResolvers.CreateAppointmentResolver,
    createManyAppointment: actionResolvers.CreateManyAppointmentResolver,
    deleteAppointment: actionResolvers.DeleteAppointmentResolver,
    updateAppointment: actionResolvers.UpdateAppointmentResolver,
    deleteManyAppointment: actionResolvers.DeleteManyAppointmentResolver,
    updateManyAppointment: actionResolvers.UpdateManyAppointmentResolver,
    upsertAppointment: actionResolvers.UpsertAppointmentResolver,
    aggregateAppointment: actionResolvers.AggregateAppointmentResolver,
    groupByAppointment: actionResolvers.GroupByAppointmentResolver
  },
  Massager: {
    massager: actionResolvers.FindUniqueMassagerResolver,
    findFirstMassager: actionResolvers.FindFirstMassagerResolver,
    massagers: actionResolvers.FindManyMassagerResolver,
    createMassager: actionResolvers.CreateMassagerResolver,
    createManyMassager: actionResolvers.CreateManyMassagerResolver,
    deleteMassager: actionResolvers.DeleteMassagerResolver,
    updateMassager: actionResolvers.UpdateMassagerResolver,
    deleteManyMassager: actionResolvers.DeleteManyMassagerResolver,
    updateManyMassager: actionResolvers.UpdateManyMassagerResolver,
    upsertMassager: actionResolvers.UpsertMassagerResolver,
    aggregateMassager: actionResolvers.AggregateMassagerResolver,
    groupByMassager: actionResolvers.GroupByMassagerResolver
  },
  Product: {
    product: actionResolvers.FindUniqueProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    products: actionResolvers.FindManyProductResolver,
    createProduct: actionResolvers.CreateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    deleteProduct: actionResolvers.DeleteProductResolver,
    updateProduct: actionResolvers.UpdateProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    upsertProduct: actionResolvers.UpsertProductResolver,
    aggregateProduct: actionResolvers.AggregateProductResolver,
    groupByProduct: actionResolvers.GroupByProductResolver
  },
  Promotion: {
    promotion: actionResolvers.FindUniquePromotionResolver,
    findFirstPromotion: actionResolvers.FindFirstPromotionResolver,
    promotions: actionResolvers.FindManyPromotionResolver,
    createPromotion: actionResolvers.CreatePromotionResolver,
    createManyPromotion: actionResolvers.CreateManyPromotionResolver,
    deletePromotion: actionResolvers.DeletePromotionResolver,
    updatePromotion: actionResolvers.UpdatePromotionResolver,
    deleteManyPromotion: actionResolvers.DeleteManyPromotionResolver,
    updateManyPromotion: actionResolvers.UpdateManyPromotionResolver,
    upsertPromotion: actionResolvers.UpsertPromotionResolver,
    aggregatePromotion: actionResolvers.AggregatePromotionResolver,
    groupByPromotion: actionResolvers.GroupByPromotionResolver
  },
  Receipt: {
    receipt: actionResolvers.FindUniqueReceiptResolver,
    findFirstReceipt: actionResolvers.FindFirstReceiptResolver,
    receipts: actionResolvers.FindManyReceiptResolver,
    createReceipt: actionResolvers.CreateReceiptResolver,
    createManyReceipt: actionResolvers.CreateManyReceiptResolver,
    deleteReceipt: actionResolvers.DeleteReceiptResolver,
    updateReceipt: actionResolvers.UpdateReceiptResolver,
    deleteManyReceipt: actionResolvers.DeleteManyReceiptResolver,
    updateManyReceipt: actionResolvers.UpdateManyReceiptResolver,
    upsertReceipt: actionResolvers.UpsertReceiptResolver,
    aggregateReceipt: actionResolvers.AggregateReceiptResolver,
    groupByReceipt: actionResolvers.GroupByReceiptResolver
  },
  Service: {
    service: actionResolvers.FindUniqueServiceResolver,
    findFirstService: actionResolvers.FindFirstServiceResolver,
    services: actionResolvers.FindManyServiceResolver,
    createService: actionResolvers.CreateServiceResolver,
    createManyService: actionResolvers.CreateManyServiceResolver,
    deleteService: actionResolvers.DeleteServiceResolver,
    updateService: actionResolvers.UpdateServiceResolver,
    deleteManyService: actionResolvers.DeleteManyServiceResolver,
    updateManyService: actionResolvers.UpdateManyServiceResolver,
    upsertService: actionResolvers.UpsertServiceResolver,
    aggregateService: actionResolvers.AggregateServiceResolver,
    groupByService: actionResolvers.GroupByServiceResolver
  },
  History_service: {
    history_service: actionResolvers.FindUniqueHistory_serviceResolver,
    findFirstHistory_service: actionResolvers.FindFirstHistory_serviceResolver,
    history_services: actionResolvers.FindManyHistory_serviceResolver,
    createHistory_service: actionResolvers.CreateHistory_serviceResolver,
    createManyHistory_service: actionResolvers.CreateManyHistory_serviceResolver,
    deleteHistory_service: actionResolvers.DeleteHistory_serviceResolver,
    updateHistory_service: actionResolvers.UpdateHistory_serviceResolver,
    deleteManyHistory_service: actionResolvers.DeleteManyHistory_serviceResolver,
    updateManyHistory_service: actionResolvers.UpdateManyHistory_serviceResolver,
    upsertHistory_service: actionResolvers.UpsertHistory_serviceResolver,
    aggregateHistory_service: actionResolvers.AggregateHistory_serviceResolver,
    groupByHistory_service: actionResolvers.GroupByHistory_serviceResolver
  }
};
const crudResolversInfo = {
  Custommer: ["custommer", "findFirstCustommer", "custommers", "createCustommer", "createManyCustommer", "deleteCustommer", "updateCustommer", "deleteManyCustommer", "updateManyCustommer", "upsertCustommer", "aggregateCustommer", "groupByCustommer"],
  Role: ["role", "findFirstRole", "roles", "createRole", "createManyRole", "deleteRole", "updateRole", "deleteManyRole", "updateManyRole", "upsertRole", "aggregateRole", "groupByRole"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Appointment: ["appointment", "findFirstAppointment", "appointments", "createAppointment", "createManyAppointment", "deleteAppointment", "updateAppointment", "deleteManyAppointment", "updateManyAppointment", "upsertAppointment", "aggregateAppointment", "groupByAppointment"],
  Massager: ["massager", "findFirstMassager", "massagers", "createMassager", "createManyMassager", "deleteMassager", "updateMassager", "deleteManyMassager", "updateManyMassager", "upsertMassager", "aggregateMassager", "groupByMassager"],
  Product: ["product", "findFirstProduct", "products", "createProduct", "createManyProduct", "deleteProduct", "updateProduct", "deleteManyProduct", "updateManyProduct", "upsertProduct", "aggregateProduct", "groupByProduct"],
  Promotion: ["promotion", "findFirstPromotion", "promotions", "createPromotion", "createManyPromotion", "deletePromotion", "updatePromotion", "deleteManyPromotion", "updateManyPromotion", "upsertPromotion", "aggregatePromotion", "groupByPromotion"],
  Receipt: ["receipt", "findFirstReceipt", "receipts", "createReceipt", "createManyReceipt", "deleteReceipt", "updateReceipt", "deleteManyReceipt", "updateManyReceipt", "upsertReceipt", "aggregateReceipt", "groupByReceipt"],
  Service: ["service", "findFirstService", "services", "createService", "createManyService", "deleteService", "updateService", "deleteManyService", "updateManyService", "upsertService", "aggregateService", "groupByService"],
  History_service: ["history_service", "findFirstHistory_service", "history_services", "createHistory_service", "createManyHistory_service", "deleteHistory_service", "updateHistory_service", "deleteManyHistory_service", "updateManyHistory_service", "upsertHistory_service", "aggregateHistory_service", "groupByHistory_service"]
};
const argsInfo = {
  FindUniqueCustommerArgs: ["where"],
  FindFirstCustommerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCustommerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCustommerArgs: ["data"],
  CreateManyCustommerArgs: ["data", "skipDuplicates"],
  DeleteCustommerArgs: ["where"],
  UpdateCustommerArgs: ["data", "where"],
  DeleteManyCustommerArgs: ["where"],
  UpdateManyCustommerArgs: ["data", "where"],
  UpsertCustommerArgs: ["where", "create", "update"],
  AggregateCustommerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCustommerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueRoleArgs: ["where"],
  FindFirstRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRoleArgs: ["data"],
  CreateManyRoleArgs: ["data", "skipDuplicates"],
  DeleteRoleArgs: ["where"],
  UpdateRoleArgs: ["data", "where"],
  DeleteManyRoleArgs: ["where"],
  UpdateManyRoleArgs: ["data", "where"],
  UpsertRoleArgs: ["where", "create", "update"],
  AggregateRoleArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRoleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAppointmentArgs: ["where"],
  FindFirstAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAppointmentArgs: ["data"],
  CreateManyAppointmentArgs: ["data", "skipDuplicates"],
  DeleteAppointmentArgs: ["where"],
  UpdateAppointmentArgs: ["data", "where"],
  DeleteManyAppointmentArgs: ["where"],
  UpdateManyAppointmentArgs: ["data", "where"],
  UpsertAppointmentArgs: ["where", "create", "update"],
  AggregateAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAppointmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMassagerArgs: ["where"],
  FindFirstMassagerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMassagerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMassagerArgs: ["data"],
  CreateManyMassagerArgs: ["data", "skipDuplicates"],
  DeleteMassagerArgs: ["where"],
  UpdateMassagerArgs: ["data", "where"],
  DeleteManyMassagerArgs: ["where"],
  UpdateManyMassagerArgs: ["data", "where"],
  UpsertMassagerArgs: ["where", "create", "update"],
  AggregateMassagerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMassagerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProductArgs: ["data"],
  CreateManyProductArgs: ["data", "skipDuplicates"],
  DeleteProductArgs: ["where"],
  UpdateProductArgs: ["data", "where"],
  DeleteManyProductArgs: ["where"],
  UpdateManyProductArgs: ["data", "where"],
  UpsertProductArgs: ["where", "create", "update"],
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePromotionArgs: ["where"],
  FindFirstPromotionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPromotionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePromotionArgs: ["data"],
  CreateManyPromotionArgs: ["data", "skipDuplicates"],
  DeletePromotionArgs: ["where"],
  UpdatePromotionArgs: ["data", "where"],
  DeleteManyPromotionArgs: ["where"],
  UpdateManyPromotionArgs: ["data", "where"],
  UpsertPromotionArgs: ["where", "create", "update"],
  AggregatePromotionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPromotionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueReceiptArgs: ["where"],
  FindFirstReceiptArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReceiptArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateReceiptArgs: ["data"],
  CreateManyReceiptArgs: ["data", "skipDuplicates"],
  DeleteReceiptArgs: ["where"],
  UpdateReceiptArgs: ["data", "where"],
  DeleteManyReceiptArgs: ["where"],
  UpdateManyReceiptArgs: ["data", "where"],
  UpsertReceiptArgs: ["where", "create", "update"],
  AggregateReceiptArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByReceiptArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueServiceArgs: ["where"],
  FindFirstServiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyServiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateServiceArgs: ["data"],
  CreateManyServiceArgs: ["data", "skipDuplicates"],
  DeleteServiceArgs: ["where"],
  UpdateServiceArgs: ["data", "where"],
  DeleteManyServiceArgs: ["where"],
  UpdateManyServiceArgs: ["data", "where"],
  UpsertServiceArgs: ["where", "create", "update"],
  AggregateServiceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByServiceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueHistory_serviceArgs: ["where"],
  FindFirstHistory_serviceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyHistory_serviceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateHistory_serviceArgs: ["data"],
  CreateManyHistory_serviceArgs: ["data", "skipDuplicates"],
  DeleteHistory_serviceArgs: ["where"],
  UpdateHistory_serviceArgs: ["data", "where"],
  DeleteManyHistory_serviceArgs: ["where"],
  UpdateManyHistory_serviceArgs: ["data", "where"],
  UpsertHistory_serviceArgs: ["where", "create", "update"],
  AggregateHistory_serviceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByHistory_serviceArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Custommer: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  Role: ["id", "role_name"],
  User: ["id", "name", "lname", "email", "phone", "address", "role"],
  Appointment: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  Massager: ["id", "name", "lname", "user_id", "appointment_id"],
  Product: ["id", "name", "product", "product_price", "create_at"],
  Promotion: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  Receipt: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  Service: ["id", "service_name", "price", "create_at"],
  History_service: ["id", "custommer_id", "note", "receip_id", "create_at"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateCustommer: ["_count", "_avg", "_sum", "_min", "_max"],
  CustommerGroupBy: ["id", "name", "Lname", "email", "phone", "address", "create_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRole: ["_count", "_avg", "_sum", "_min", "_max"],
  RoleGroupBy: ["id", "role_name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "name", "lname", "email", "phone", "address", "role", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAppointment: ["_count", "_avg", "_sum", "_min", "_max"],
  AppointmentGroupBy: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMassager: ["_count", "_avg", "_sum", "_min", "_max"],
  MassagerGroupBy: ["id", "name", "lname", "user_id", "appointment_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductGroupBy: ["id", "name", "product", "product_price", "create_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePromotion: ["_count", "_avg", "_sum", "_min", "_max"],
  PromotionGroupBy: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateReceipt: ["_count", "_avg", "_sum", "_min", "_max"],
  ReceiptGroupBy: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateService: ["_count", "_avg", "_sum", "_min", "_max"],
  ServiceGroupBy: ["id", "service_name", "price", "create_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateHistory_service: ["_count", "_avg", "_sum", "_min", "_max"],
  History_serviceGroupBy: ["id", "custommer_id", "note", "receip_id", "create_at", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  CustommerCountAggregate: ["id", "name", "Lname", "email", "phone", "address", "create_at", "_all"],
  CustommerAvgAggregate: ["id"],
  CustommerSumAggregate: ["id"],
  CustommerMinAggregate: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerMaxAggregate: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  RoleCountAggregate: ["id", "role_name", "_all"],
  RoleAvgAggregate: ["id"],
  RoleSumAggregate: ["id"],
  RoleMinAggregate: ["id", "role_name"],
  RoleMaxAggregate: ["id", "role_name"],
  UserCountAggregate: ["id", "name", "lname", "email", "phone", "address", "role", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "name", "lname", "email", "phone", "address", "role"],
  UserMaxAggregate: ["id", "name", "lname", "email", "phone", "address", "role"],
  AppointmentCountAggregate: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "_all"],
  AppointmentAvgAggregate: ["id", "customer_id", "massager_id"],
  AppointmentSumAggregate: ["id", "customer_id", "massager_id"],
  AppointmentMinAggregate: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  AppointmentMaxAggregate: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  MassagerCountAggregate: ["id", "name", "lname", "user_id", "appointment_id", "_all"],
  MassagerAvgAggregate: ["id", "appointment_id"],
  MassagerSumAggregate: ["id", "appointment_id"],
  MassagerMinAggregate: ["id", "name", "lname", "user_id", "appointment_id"],
  MassagerMaxAggregate: ["id", "name", "lname", "user_id", "appointment_id"],
  ProductCountAggregate: ["id", "name", "product", "product_price", "create_at", "_all"],
  ProductAvgAggregate: ["id", "product_price"],
  ProductSumAggregate: ["id", "product_price"],
  ProductMinAggregate: ["id", "name", "product", "product_price", "create_at"],
  ProductMaxAggregate: ["id", "name", "product", "product_price", "create_at"],
  PromotionCountAggregate: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at", "_all"],
  PromotionAvgAggregate: ["id", "discount_price"],
  PromotionSumAggregate: ["id", "discount_price"],
  PromotionMinAggregate: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionMaxAggregate: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  ReceiptCountAggregate: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "_all"],
  ReceiptAvgAggregate: ["id", "customer_id", "create_by", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptSumAggregate: ["id", "customer_id", "create_by", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptMinAggregate: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptMaxAggregate: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ServiceCountAggregate: ["id", "service_name", "price", "create_at", "_all"],
  ServiceAvgAggregate: ["id", "price"],
  ServiceSumAggregate: ["id", "price"],
  ServiceMinAggregate: ["id", "service_name", "price", "create_at"],
  ServiceMaxAggregate: ["id", "service_name", "price", "create_at"],
  History_serviceCountAggregate: ["id", "custommer_id", "note", "receip_id", "create_at", "_all"],
  History_serviceAvgAggregate: ["id", "custommer_id", "note", "receip_id"],
  History_serviceSumAggregate: ["id", "custommer_id", "note", "receip_id"],
  History_serviceMinAggregate: ["id", "custommer_id", "note", "receip_id", "create_at"],
  History_serviceMaxAggregate: ["id", "custommer_id", "note", "receip_id", "create_at"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  CustommerWhereInput: ["AND", "OR", "NOT", "id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerOrderByWithRelationInput: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerWhereUniqueInput: ["id"],
  CustommerOrderByWithAggregationInput: ["id", "name", "Lname", "email", "phone", "address", "create_at", "_count", "_avg", "_max", "_min", "_sum"],
  CustommerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "Lname", "email", "phone", "address", "create_at"],
  RoleWhereInput: ["AND", "OR", "NOT", "id", "role_name"],
  RoleOrderByWithRelationInput: ["id", "role_name"],
  RoleWhereUniqueInput: ["id"],
  RoleOrderByWithAggregationInput: ["id", "role_name", "_count", "_avg", "_max", "_min", "_sum"],
  RoleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "role_name"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "lname", "email", "phone", "address", "role"],
  UserOrderByWithRelationInput: ["id", "name", "lname", "email", "phone", "address", "role"],
  UserWhereUniqueInput: ["id"],
  UserOrderByWithAggregationInput: ["id", "name", "lname", "email", "phone", "address", "role", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "lname", "email", "phone", "address", "role"],
  AppointmentWhereInput: ["AND", "OR", "NOT", "id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  AppointmentOrderByWithRelationInput: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  AppointmentWhereUniqueInput: ["id"],
  AppointmentOrderByWithAggregationInput: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "_count", "_avg", "_max", "_min", "_sum"],
  AppointmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  MassagerWhereInput: ["AND", "OR", "NOT", "id", "name", "lname", "user_id", "appointment_id"],
  MassagerOrderByWithRelationInput: ["id", "name", "lname", "user_id", "appointment_id"],
  MassagerWhereUniqueInput: ["id"],
  MassagerOrderByWithAggregationInput: ["id", "name", "lname", "user_id", "appointment_id", "_count", "_avg", "_max", "_min", "_sum"],
  MassagerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "lname", "user_id", "appointment_id"],
  ProductWhereInput: ["AND", "OR", "NOT", "id", "name", "product", "product_price", "create_at"],
  ProductOrderByWithRelationInput: ["id", "name", "product", "product_price", "create_at"],
  ProductWhereUniqueInput: ["id"],
  ProductOrderByWithAggregationInput: ["id", "name", "product", "product_price", "create_at", "_count", "_avg", "_max", "_min", "_sum"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "product", "product_price", "create_at"],
  PromotionWhereInput: ["AND", "OR", "NOT", "id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionOrderByWithRelationInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionWhereUniqueInput: ["id"],
  PromotionOrderByWithAggregationInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at", "_count", "_avg", "_max", "_min", "_sum"],
  PromotionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  ReceiptWhereInput: ["AND", "OR", "NOT", "id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptOrderByWithRelationInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptWhereUniqueInput: ["id"],
  ReceiptOrderByWithAggregationInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "_count", "_avg", "_max", "_min", "_sum"],
  ReceiptScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ServiceWhereInput: ["AND", "OR", "NOT", "id", "service_name", "price", "create_at"],
  ServiceOrderByWithRelationInput: ["id", "service_name", "price", "create_at"],
  ServiceWhereUniqueInput: ["id"],
  ServiceOrderByWithAggregationInput: ["id", "service_name", "price", "create_at", "_count", "_avg", "_max", "_min", "_sum"],
  ServiceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "service_name", "price", "create_at"],
  History_serviceWhereInput: ["AND", "OR", "NOT", "id", "custommer_id", "note", "receip_id", "create_at"],
  History_serviceOrderByWithRelationInput: ["id", "custommer_id", "note", "receip_id", "create_at"],
  History_serviceWhereUniqueInput: ["id"],
  History_serviceOrderByWithAggregationInput: ["id", "custommer_id", "note", "receip_id", "create_at", "_count", "_avg", "_max", "_min", "_sum"],
  History_serviceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "custommer_id", "note", "receip_id", "create_at"],
  CustommerCreateInput: ["name", "Lname", "email", "phone", "address", "create_at"],
  CustommerUpdateInput: ["name", "Lname", "email", "phone", "address", "create_at"],
  CustommerCreateManyInput: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerUpdateManyMutationInput: ["name", "Lname", "email", "phone", "address", "create_at"],
  RoleCreateInput: ["role_name"],
  RoleUpdateInput: ["role_name"],
  RoleCreateManyInput: ["id", "role_name"],
  RoleUpdateManyMutationInput: ["role_name"],
  UserCreateInput: ["name", "lname", "email", "phone", "address", "role"],
  UserUpdateInput: ["name", "lname", "email", "phone", "address", "role"],
  UserCreateManyInput: ["id", "name", "lname", "email", "phone", "address", "role"],
  UserUpdateManyMutationInput: ["name", "lname", "email", "phone", "address", "role"],
  AppointmentCreateInput: ["customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  AppointmentUpdateInput: ["customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  AppointmentCreateManyInput: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  AppointmentUpdateManyMutationInput: ["customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  MassagerCreateInput: ["name", "lname", "user_id", "appointment_id"],
  MassagerUpdateInput: ["name", "lname", "user_id", "appointment_id"],
  MassagerCreateManyInput: ["id", "name", "lname", "user_id", "appointment_id"],
  MassagerUpdateManyMutationInput: ["name", "lname", "user_id", "appointment_id"],
  ProductCreateInput: ["name", "product", "product_price", "create_at"],
  ProductUpdateInput: ["name", "product", "product_price", "create_at"],
  ProductCreateManyInput: ["id", "name", "product", "product_price", "create_at"],
  ProductUpdateManyMutationInput: ["name", "product", "product_price", "create_at"],
  PromotionCreateInput: ["promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionUpdateInput: ["promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionCreateManyInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionUpdateManyMutationInput: ["promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  ReceiptCreateInput: ["customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptUpdateInput: ["customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptCreateManyInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptUpdateManyMutationInput: ["customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ServiceCreateInput: ["service_name", "price", "create_at"],
  ServiceUpdateInput: ["service_name", "price", "create_at"],
  ServiceCreateManyInput: ["id", "service_name", "price", "create_at"],
  ServiceUpdateManyMutationInput: ["service_name", "price", "create_at"],
  History_serviceCreateInput: ["custommer_id", "note", "receip_id", "create_at"],
  History_serviceUpdateInput: ["custommer_id", "note", "receip_id", "create_at"],
  History_serviceCreateManyInput: ["id", "custommer_id", "note", "receip_id", "create_at"],
  History_serviceUpdateManyMutationInput: ["custommer_id", "note", "receip_id", "create_at"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CustommerCountOrderByAggregateInput: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerAvgOrderByAggregateInput: ["id"],
  CustommerMaxOrderByAggregateInput: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerMinOrderByAggregateInput: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  RoleCountOrderByAggregateInput: ["id", "role_name"],
  RoleAvgOrderByAggregateInput: ["id"],
  RoleMaxOrderByAggregateInput: ["id", "role_name"],
  RoleMinOrderByAggregateInput: ["id", "role_name"],
  RoleSumOrderByAggregateInput: ["id"],
  UserCountOrderByAggregateInput: ["id", "name", "lname", "email", "phone", "address", "role"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "name", "lname", "email", "phone", "address", "role"],
  UserMinOrderByAggregateInput: ["id", "name", "lname", "email", "phone", "address", "role"],
  UserSumOrderByAggregateInput: ["id"],
  BoolFilter: ["equals", "not"],
  AppointmentCountOrderByAggregateInput: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  AppointmentAvgOrderByAggregateInput: ["id", "customer_id", "massager_id"],
  AppointmentMaxOrderByAggregateInput: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  AppointmentMinOrderByAggregateInput: ["id", "customer_id", "massager_id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  AppointmentSumOrderByAggregateInput: ["id", "customer_id", "massager_id"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  MassagerCountOrderByAggregateInput: ["id", "name", "lname", "user_id", "appointment_id"],
  MassagerAvgOrderByAggregateInput: ["id", "appointment_id"],
  MassagerMaxOrderByAggregateInput: ["id", "name", "lname", "user_id", "appointment_id"],
  MassagerMinOrderByAggregateInput: ["id", "name", "lname", "user_id", "appointment_id"],
  MassagerSumOrderByAggregateInput: ["id", "appointment_id"],
  ProductCountOrderByAggregateInput: ["id", "name", "product", "product_price", "create_at"],
  ProductAvgOrderByAggregateInput: ["id", "product_price"],
  ProductMaxOrderByAggregateInput: ["id", "name", "product", "product_price", "create_at"],
  ProductMinOrderByAggregateInput: ["id", "name", "product", "product_price", "create_at"],
  ProductSumOrderByAggregateInput: ["id", "product_price"],
  PromotionCountOrderByAggregateInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionAvgOrderByAggregateInput: ["id", "discount_price"],
  PromotionMaxOrderByAggregateInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionMinOrderByAggregateInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionSumOrderByAggregateInput: ["id", "discount_price"],
  ReceiptCountOrderByAggregateInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptAvgOrderByAggregateInput: ["id", "customer_id", "create_by", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptMaxOrderByAggregateInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptMinOrderByAggregateInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptSumOrderByAggregateInput: ["id", "customer_id", "create_by", "service_id", "appoint_id", "promotion_id", "product_id"],
  ServiceCountOrderByAggregateInput: ["id", "service_name", "price", "create_at"],
  ServiceAvgOrderByAggregateInput: ["id", "price"],
  ServiceMaxOrderByAggregateInput: ["id", "service_name", "price", "create_at"],
  ServiceMinOrderByAggregateInput: ["id", "service_name", "price", "create_at"],
  ServiceSumOrderByAggregateInput: ["id", "price"],
  History_serviceCountOrderByAggregateInput: ["id", "custommer_id", "note", "receip_id", "create_at"],
  History_serviceAvgOrderByAggregateInput: ["id", "custommer_id", "note", "receip_id"],
  History_serviceMaxOrderByAggregateInput: ["id", "custommer_id", "note", "receip_id", "create_at"],
  History_serviceMinOrderByAggregateInput: ["id", "custommer_id", "note", "receip_id", "create_at"],
  History_serviceSumOrderByAggregateInput: ["id", "custommer_id", "note", "receip_id"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BoolFieldUpdateOperationsInput: ["set"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

