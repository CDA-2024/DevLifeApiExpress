import { Request, Response } from "express";
import { MaterialCmUseCase } from "../../core/use-cases/materialCm.use-case";

const getMaterialCmUseCase = new MaterialCmUseCase();

export const getMaterialCmController = async (req: Request, res: Response) => {
  const materials = await getMaterialCmUseCase.getAll();
  res.json(materials);
};

export const getMaterialCmByIdController = async (req: Request, res: Response) => {
  const material = await getMaterialCmUseCase.getById(req.params.id);
  res.json(material);
};

export const saveMaterialCmController = async (req: Request, res: Response) => {
  const material = await getMaterialCmUseCase.save(req.body);
  res.json(material);
};

export const deleteMaterialCmController = async (req: Request, res: Response) => {
  await getMaterialCmUseCase.delete(req.params.id);
  res.json({ message: 'Material deleted' });
};        
