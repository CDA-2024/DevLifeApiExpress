import { Request, Response } from "express";

import { EmployeeSkillUseCase } from "../../core/use-cases/employeeskill.use-case";

const employeeSkillUseCase = new EmployeeSkillUseCase();

export const getEmployeesSkillController = async (
  req: Request,
  res: Response
) => {
  const materials = await employeeSkillUseCase.getAll();
  res.json(materials);
};

export const getEmployeeSkillByIdController = async (
  req: Request,
  res: Response
) => {
  const material = await employeeSkillUseCase.getById(req.params.id);
  res.json(material);
};

export const saveEmployeeSkillController = async (
  req: Request,
  res: Response
) => {
  const material = await employeeSkillUseCase.save(req.body);
  res.json(material);
};

export const deleteEmployeeSkillController = async (
  req: Request,
  res: Response
) => {
  await employeeSkillUseCase.delete(req.params.id);
  res.json();
};
