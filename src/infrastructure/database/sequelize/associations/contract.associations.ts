import { ContractModel } from "../models/contract.model";
import { CompanyContractModel } from "../models/companyContract.model";

CompanyContractModel.belongsTo(ContractModel, {
  foreignKey: "id_contract",
  as: "contract",
});
ContractModel.hasMany(CompanyContractModel, {
  foreignKey: "id_contract",
  as: "companyContract",
});

//TODO belongsTo relation Company-CompanyContract
//TODO HasMany relation CompanyContract-Company

export { CompanyContractModel, ContractModel };
