import { Request, Response } from "express";
import { MaterialUseCase } from "../../core/use-cases/material.use-case";

const materialUseCase = new MaterialUseCase();

export const getMaterialController = async (req: Request, res: Response) => {
  const materials = await materialUseCase.getAll();
  res.json(materials);
};

export const getMaterialByIdController = async (
  req: Request,
  res: Response
) => {
  const material = await materialUseCase.getById(req.params.id);
  res.json(material);
};

export const createMaterialController = async (req: Request, res: Response) => {
  const material = await materialUseCase.create(req.body);
  res.json(material);
};

export const updateMaterialController = async (req: Request, res: Response) => {
  const material = await materialUseCase.create(req.body);
  res.json(material);
};

export const deleteMaterialController = async (req: Request, res: Response) => {
  await materialUseCase.delete(req.params.id);
  res.json();
};
