import { NextFunction, Request, Response } from "express";
import { BudgetUseCase } from "../../core/use-cases/budget.use-case";

const budgetUseCase = new BudgetUseCase();

export const getBudgetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const budgets = await budgetUseCase.getAll();
    res.json(budgets);
  } catch (error) {
    next(error);
  }
};

export const getBudgetByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const budget = await budgetUseCase.getById(req.params.id);
    res.json(budget);
  } catch (error) {
    next(error);
  }
};

export const saveBudgetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const budget = await budgetUseCase.save(req.body);
    res.status(201).json(budget);
  } catch (error) {
    next(error);
  }
};

export const deleteBudgetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await budgetUseCase.delete(req.params.id);
    res.json();
  } catch (error) {
    next(error);
  }
};
