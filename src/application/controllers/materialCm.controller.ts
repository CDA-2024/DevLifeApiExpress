import { NextFunction, Request, Response } from "express";
import { MaterialCmUseCase } from "../../core/use-cases/materialCm.use-case";

const getMaterialCmUseCase = new MaterialCmUseCase();

export const getMaterialCmController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const materials = await getMaterialCmUseCase.getAll();
    res.json(materials);
  } catch (error) {
    next(error);
  }
};

export const getMaterialCmByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await getMaterialCmUseCase.getById(req.params.id);
    res.json(material);
  } catch (error) {
    next(error);
  }
};

export const saveMaterialCmController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await getMaterialCmUseCase.save(req.body);
    res.status(201).json(material);
  } catch (error) {
    next(error);
  }
};

export const deleteMaterialCmController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getMaterialCmUseCase.delete(req.params.id);
    res.json();
  } catch (error) {
    next(error);
  }
};
