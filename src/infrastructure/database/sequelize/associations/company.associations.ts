import { CompanyContractModel } from "../models/companyContract.model";
import { CompanyModel } from "../models/company.model";
import { BudgetModel } from "../models/budget.model";

CompanyContractModel.belongsTo(CompanyModel, {
  foreignKey: "id_company",
  as: "company",
});

CompanyModel.hasMany(CompanyContractModel, {
  foreignKey: "id_company",
  as: "companyContract",
});

BudgetModel.belongsTo(CompanyModel, {
  foreignKey: "id_company",
  as: "company",
});
CompanyModel.hasOne(BudgetModel, {
  foreignKey: "id_company",
  as: "budget",
});

export { CompanyContractModel, CompanyModel, BudgetModel };
