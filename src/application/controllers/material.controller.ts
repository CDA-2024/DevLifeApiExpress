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
    next(
      CustomErrorHandler.internal(
        "Erreur serveur lors de la récupération des matériau."
      )
    );
  }
};

export const getMaterialByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const materialId = req.params.id;
    if (!materialId) {
      return next(
        CustomErrorHandler.badRequest("L'identifiant du matériau est requis.")
      );
    }
    const material = await materialUseCase.getById(materialId);
    res.json(material);
  } catch (error) {
    next(CustomErrorHandler.notFound("Aucun matériau trouvé."));
  }
};

export const saveMaterialController = async (req: Request, res: Response) => {
  const material = await materialUseCase.save(req.body);
  res.json(material);
};

export const deleteMaterialController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const materialId = req.params.id;
    if (!materialId) {
      return next(
        CustomErrorHandler.badRequest("L'identifiant du matériau est requis.")
      );
    }
    const material = await materialUseCase.delete(req.params.id);
    res.json(material);
  } catch (error) {
    next(CustomErrorHandler.notFound("Aucun matériau trouvé."));
  }
};
