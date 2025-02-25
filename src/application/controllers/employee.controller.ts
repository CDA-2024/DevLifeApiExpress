import { NextFunction, Request, Response } from "express";
import { EmployeeUseCase } from "../../core/use-cases/employee.use-case";

const EmployeeCompagnyUseCase = new EmployeeUseCase();

export const getEmployeesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const materials = await EmployeeCompagnyUseCase.getAll();
    res.json(materials);
  } catch (error) {
    next(error);
  }
};

export const getEmployeeByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await EmployeeCompagnyUseCase.getById(req.params.id);
    res.json(material);
  } catch (error) {
    next(error);
  }
};

export const saveEmployeeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employeeData = req.body;
    const employee = await EmployeeCompagnyUseCase.save(employeeData);
    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
};

export const deleteEmployeeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employeeId = req.params.id;
    await EmployeeCompagnyUseCase.delete(employeeId);
    res.json();
  } catch (error) {
    next(error);
  }
};
