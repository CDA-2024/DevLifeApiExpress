import { BudgetModel } from "../models/budget.model";
import { CompanyModel } from "./employee.associations";

BudgetModel.belongsTo(CompanyModel, {
  foreignKey: "id_company",
  as: "company",
});
CompanyModel.hasOne(BudgetModel, {
  foreignKey: "id_company",
  as: "budget",
});
