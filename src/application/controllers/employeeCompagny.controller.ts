import { Request, Response } from "express";
import { EmployeeCompagnyUseCase } from "../../core/use-cases/employeesCompagny.use-case";

const employeeCompagnyUseCase = new EmployeeCompagnyUseCase();

export const getEmployeesCompagnyController = async (
  req: Request,
  res: Response
) => {
  const materials = await employeeCompagnyUseCase.getAll();
  res.json(materials);
};

export const getEmployeeCompagnyByIdController = async (
  req: Request,
  res: Response
) => {
  const material = await employeeCompagnyUseCase.getById(req.params.id);
  res.json(material);
};

export const saveEmployeeCompagnyController = async (
  req: Request,
  res: Response
) => {
  const material = await employeeCompagnyUseCase.save(req.body);
  res.json(material);
};

export const deleteEmployeeCompagnyController = async (
  req: Request,
  res: Response
) => {
  await employeeCompagnyUseCase.delete(req.params.id);
  res.json();
};
