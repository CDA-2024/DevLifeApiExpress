import { MaterialSkillUseCase } from "../../core/use-cases/materialSkill.use-case";
import { NextFunction, Request, Response } from "express";

const materialSkillUseCase = new MaterialSkillUseCase();

export const getMaterialSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const materials = await materialSkillUseCase.getAll();
    res.json(materials);
  } catch (error) {
    next(error);
  }
};

export const getMaterialSkillByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await materialSkillUseCase.getById(req.params.id);
    res.json(material);
  } catch (error) {
    next(error);
  }
};

export const saveMaterialSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await materialSkillUseCase.save(req.body);
    res.status(201).json(material);
  } catch (error) {
    next(error);
  }
};

export const deleteMaterialSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await materialSkillUseCase.delete(req.params.id);
    res.json();
  } catch (error) {
    next(error);
  }
};
