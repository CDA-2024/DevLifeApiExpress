import { NextFunction, Request, Response } from "express";
import { EmployeeCompagnyUseCase } from "../../core/use-cases/employeesCompagny.use-case";

const employeeCompagnyUseCase = new EmployeeCompagnyUseCase();

export const getEmployeesCompagnyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const materials = await employeeCompagnyUseCase.getAll();
    res.json(materials);
  } catch (error) {
    next(error);
  }
};

export const getEmployeeCompagnyByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await employeeCompagnyUseCase.getById(req.params.id);
    res.json(material);
  } catch (error) {
    next(error);
  }
};

export const saveEmployeeCompagnyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await employeeCompagnyUseCase.save(req.body);
    res.status(201).json(material);
  } catch (error) {
    next(error);
  }
};

export const deleteEmployeeCompagnyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await employeeCompagnyUseCase.delete(req.params.id);
    res.json();
  } catch (error) {
    next(error);
  }
};
