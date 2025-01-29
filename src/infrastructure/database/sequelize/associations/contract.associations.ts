import { ContractModel } from "../models/contract.model";
import { CompanyContractModel } from "../models/companyContract.model";
import { CompanyModel } from "../models/company.model";
import { EmployeeCompagnyModel } from "../models/employeeCompagny.model";

CompanyContractModel.belongsTo(ContractModel, {
  foreignKey: "id_contract",
  as: "contract",
});
ContractModel.hasMany(CompanyContractModel, {
  foreignKey: "id_contract",
  as: "companyContract",
});

CompanyContractModel.belongsToMany(EmployeeCompagnyModel, {
  through: "contractCm_employeeCm",
});

export { CompanyContractModel, ContractModel, CompanyModel };
