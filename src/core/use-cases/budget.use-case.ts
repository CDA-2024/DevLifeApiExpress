import { BudgetSequelizeRepository } from "../../infrastructure/repository/budget.repository.sequelize";
import { Budget } from "../entities/budget.entity";
import { BaseUseCase } from "./base.use-case";

export class BudgetUseCase extends BaseUseCase<Budget> {
  constructor() {
    super(new BudgetSequelizeRepository());
  }
}
