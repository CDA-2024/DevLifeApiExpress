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

export const saveMaterialSkillController = async (
  req: Request,
  res: Response
) => {
  const material = await materialSkillUseCase.save(req.body);
  res.json(material);
};

export const deleteMaterialSkillController = async (
  req: Request,
  res: Response
) => {
  await materialSkillUseCase.delete(req.params.id);
  res.json();
};
