import { Request, Response } from "express";
import { EmployeeUseCase } from "../../core/use-cases/employee.use-case";

const EmployeeCompagnyUseCase = new EmployeeUseCase();

export const getEmployeesController = async (
  req: Request,
  res: Response
) => {
  const materials = await EmployeeCompagnyUseCase.getAll();
  res.json(materials);
};

export const getEmployeeByIdController = async (
  req: Request,
  res: Response
) => {
  const material = await EmployeeCompagnyUseCase.getById(req.params.id);
  res.json(material);
};

export const saveEmployeeController = async (
  req: Request,
  res: Response
) => {
  const material = await EmployeeCompagnyUseCase.save(req.body);
  res.json(material);
};

export const deleteEmployeeController = async (
  req: Request,
  res: Response
) => {
  await EmployeeCompagnyUseCase.delete(req.params.id);
  res.json();
};