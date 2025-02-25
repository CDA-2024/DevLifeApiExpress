import { NextFunction, Request, Response } from "express";

import { EmployeeSkillUseCase } from "../../core/use-cases/employeeskill.use-case";

const employeeSkillUseCase = new EmployeeSkillUseCase();

export const getEmployeesSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const materials = await employeeSkillUseCase.getAll();
    res.json(materials);
  } catch (error) {
    next(error);
  }
};

export const getEmployeeSkillByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await employeeSkillUseCase.getById(req.params.id);
    res.json(material);
  } catch (error) {
    next(error);
  }
};

export const saveEmployeeSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await employeeSkillUseCase.save(req.body);
    res.status(201).json(material);
  } catch (error) {
    next(error);
  }
};

export const deleteEmployeeSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await employeeSkillUseCase.delete(req.params.id);
    res.json();
  } catch (error) {
    next(error);
  }
};
