import { NextFunction, Request, Response } from "express";
import { MaterialUseCase } from "../../core/use-cases/material.use-case";
import { CustomErrorHandler } from "../custom-error-handler";

const materialUseCase = new MaterialUseCase();

export const getMaterialController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const materials = await materialUseCase.getAll();
    res.json(materials);
  } catch (error) {
    next(error);
  }
};

export const getMaterialByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const materialId = req.params.id;
    const material = await materialUseCase.getById(materialId);
    res.json(material);
  } catch (error) {
    next(error);
  }
};

export const saveMaterialController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await materialUseCase.save(req.body);
    res.status(201).json(material);
  } catch (error) {
    next(error);
  }
};

export const deleteMaterialController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const material = await materialUseCase.delete(req.params.id);
    res.json(material);
  } catch (error) {
    next(error);
  }
};
