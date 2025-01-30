import { MaterialCmModel } from "../models/materialCm.model";

MaterialCmModel.hasMany(MaterialCmModel, {
  foreignKey: "id_material",
  as: "materialDetails",
});

MaterialCmModel.belongsToMany(MaterialCmModel, {
  through: "company_material_cm",
});

MaterialCmModel.belongsTo(MaterialCmModel, {
  foreignKey: "id_c_employee",
  as: "companyEmployeeDetail",
});

export { MaterialCmModel };