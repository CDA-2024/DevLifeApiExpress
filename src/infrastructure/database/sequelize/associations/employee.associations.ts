import { EmployeeCompagnyModel } from "../models/employeeCompagny.model";
import { CompanyModel } from "../models/company.model";
import { EmployeeModel } from "../models/employee.model";
import { EmployeeSkillModel } from "../models/employeeSkill.model";
import { CompanyContractModel } from "../models/companyContract.model";
import { MaterialCmModel } from "../models/materialCm.model";

EmployeeModel.belongsTo(EmployeeSkillModel, {
  foreignKey: "id_skill",
  as: "employee_skill",
});
EmployeeSkillModel.hasMany(EmployeeModel, {
  foreignKey: "id_skill",
  as: "employees",
});

EmployeeCompagnyModel.belongsTo(EmployeeModel, {
  foreignKey: "id_employee",
  as: "employee",
});

EmployeeModel.hasMany(EmployeeCompagnyModel, {
  foreignKey: "id_employee",
  as: "companyEmployees",
});

EmployeeCompagnyModel.belongsToMany(CompanyContractModel, {
  through: "contractCm_employeeCm",
});

EmployeeCompagnyModel.belongsTo(CompanyModel, {
  foreignKey: "id_company",
  as: "employee",
});

EmployeeCompagnyModel.hasMany(MaterialCmModel, {
  foreignKey: "id_c_employee",
  as: "materilas",
});

CompanyModel.hasMany(EmployeeCompagnyModel, {
  foreignKey: "id_company",
  as: "company",
});

export { EmployeeModel, EmployeeSkillModel, CompanyModel };
