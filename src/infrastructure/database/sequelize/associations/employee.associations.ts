import { CompagnyEmployeeModel } from "../models/compagnyEmployee.model";
import { EmployeeModel } from "../models/employee.model";
import { EmployeeSkillModel } from "../models/employeeSkill.model";

EmployeeModel.belongsTo(EmployeeSkillModel, {
  foreignKey: "id_skill",
  as: "employee_skill",
});
EmployeeSkillModel.hasMany(EmployeeModel, {
  foreignKey: "id_skill",
  as: "employees",
});

CompagnyEmployeeModel.belongsTo(EmployeeModel, {
  foreignKey: "id_employee",
  as: "employee",
});
EmployeeModel.hasMany(CompagnyEmployeeModel, {
  foreignKey: "id_employee",
  as: "companyEmployees",
});

//TODO belongsTo relation Compagnie
//TODO HasMany relation contract_Employee and material_compagny

export { EmployeeModel, EmployeeSkillModel };
