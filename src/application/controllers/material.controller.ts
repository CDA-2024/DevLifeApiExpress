import { Request, Response } from "express";
import { MaterialUseCase } from "../../core/use-cases/material/get-material.use-case";
import { MaterialSequelizeRepository } from "../../infrastructure/repository/material.repository.sequelize";

const materialRepository = new MaterialSequelizeRepository();
const materialUseCase = new MaterialUseCase(materialRepository);

export const getMaterialController = async (req: Request, res: Response) => {
  const materials = await materialUseCase.list();
  res.json(materials);
};

export const getMaterialByIdController = async (req: Request, res: Response) => {
  const material = await materialUseCase.read(req.params.id);
  res.json(material);
};

export const createMaterialController = async (req: Request, res: Response) => {
  const material = await materialUseCase.create(req.body);
  res.json(material);
};

export const updateMaterialController = async (req: Request, res: Response) => {
  const material = await materialUseCase.update(req.body);
  res.json(material);
};

export const deleteMaterialController = async (req: Request, res: Response) => {
  await materialUseCase.delete(req.params.id);
  res.json();
};

