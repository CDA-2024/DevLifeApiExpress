import { Request, Response } from "express";
import { EmlployeesCompagnyUseCase } from "../../core/use-cases/employeesCompagny.use-case";

const EmployeeCompagnyUseCase = new EmlployeesCompagnyUseCase();

export const getEmlployeesCompagnyController = async (
  req: Request,
  res: Response
) => {
  const materials = await EmployeeCompagnyUseCase.getAll();
  res.json(materials);
};

export const getEmlployeesCompagnyByIdController = async (
  req: Request,
  res: Response
) => {
  const material = await EmployeeCompagnyUseCase.getById(req.params.id);
  res.json(material);
};

export const saveEmlployeesCompagnyController = async (
  req: Request,
  res: Response
) => {
  const material = await EmployeeCompagnyUseCase.save(req.body);
  res.json(material);
};

export const deleteEmlployeesCompagnyController = async (
  req: Request,
  res: Response
) => {
  await EmployeeCompagnyUseCase.delete(req.params.id);
  res.json();
};
