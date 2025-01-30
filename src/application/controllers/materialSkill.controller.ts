import { MaterialSkillUseCase } from "../../core/use-cases/materialSkill.use-case";
import { Request, Response } from "express";

const materialSkillUseCase = new MaterialSkillUseCase();

export const getMaterialSkillController = async (
  req: Request,
  res: Response
) => {
  const materials = await materialSkillUseCase.getAll();
  res.json(materials);
};

export const getMaterialSkillByIdController = async (
  req: Request,
  res: Response
) => {
  const material = await materialSkillUseCase.getById(req.params.id);
  res.json(material);
};

export const createMaterialSkillController = async (
  req: Request,
  res: Response
) => {
  const material = await materialSkillUseCase.create(req.body);
  res.json(material);
};

export const updateMaterialSkillController = async (
  req: Request,
  res: Response
) => {
  const material = await materialSkillUseCase.create(req.body);
  res.json(material);
};

export const deleteMaterialSkillController = async (
  req: Request,
  res: Response
) => {
  await materialSkillUseCase.delete(req.params.id);
  res.json();
};
