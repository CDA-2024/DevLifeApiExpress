import { Request, Response } from "express";
import { BudgetUseCase } from "../../core/use-cases/budget.use-case";

const budgetUseCase = new BudgetUseCase();

export const getBudgetController = async (req: Request, res: Response) => {
  const budgets = await budgetUseCase.getAll();
  res.json(budgets);
};

export const getBudgetByIdController = async (req: Request, res: Response) => {
  const budget = await budgetUseCase.getById(req.params.id);
  res.json(budget);
};

export const saveBudgetController = async (req: Request, res: Response) => {
  const budget = await budgetUseCase.save(req.body);
  res.json(budget);
};

export const deleteBudgetController = async (req: Request, res: Response) => {
  await budgetUseCase.delete(req.params.id);
  res.json({ message: 'Budget deleted' });
};
