import { Budget } from "../../core/entities/budget.entity";
import { BudgetModel } from "../database/sequelize/associations/company.associations";
import { BudgetRepository } from "../../core/interfaces/budget.repository.interface";

export class BudgetSequelizeRepository implements BudgetRepository {
  async findAll(): Promise<Budget[]> {
    const budgetTot = await BudgetModel.findAll();
    return budgetTot.map(
      (entry) =>
        new Budget(
          entry.id,
          entry.id_company,
          entry.revenus,
          entry.depenses,
          entry.benefices,
          entry.createdAt,
          entry.updateAt
        )
    );
  }
  async findById(id: string): Promise<Budget | null> {
    const entry = await BudgetModel.findByPk(id);
    if (entry) {
      const entryEntity: Budget = {
        id: entry.id,
        id_company: entry.id_company,
        revenus: entry.revenus,
        depenses: entry.depenses,
        benefices: entry.benefices,
        createdAt: entry.createdAt,
        updateAt: entry.updateAt,
      };
      return entryEntity;
    }
    return null;
  }

  async save(entry: Budget): Promise<Budget> {
    await BudgetModel.upsert({
      id: entry.id,
      id_company: entry.id_company,
      revenus: entry.revenus,
      depenses: entry.depenses,
      benefices: entry.benefices,
      createdAt: entry.createdAt,
      updateAt: entry.updateAt,
    });
    return entry;
  }

  async delete(id: string): Promise<void> {
    const entry = await BudgetModel.findByPk(id);
    if (entry) {
      await entry.destroy();
    }
  }
}
