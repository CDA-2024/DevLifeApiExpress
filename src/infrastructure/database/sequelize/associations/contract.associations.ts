import { ContractModel } from "../models/contract.model";
import { CompanyContractModel } from "../models/companyContract.model";
import { CompanyModel } from "../models/company.model";

CompanyContractModel.belongsTo(ContractModel, {
  foreignKey: "id_contract",
  as: "contract",
});
ContractModel.hasMany(CompanyContractModel, {
  foreignKey: "id_contract",
  as: "companyContract",
});

//TODO relation ...

CompanyContractModel.belongsTo(CompanyModel, {
  foreignKey: "id_company",
  as: "company",
});

CompanyModel.hasMany(CompanyContractModel, {
  foreignKey: "id_company",
  as: "companyContract",
});

export { CompanyContractModel, ContractModel, CompanyModel };
