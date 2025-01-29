import { Request, Response } from "express";
import { GetMaterialUseCase } from "../../core/use-cases/material/get-material.use-case";
import { MaterialSequelizeRepository } from "../../infrastructure/repository/material.repository.sequelize";

const materialRepository = new MaterialSequelizeRepository();
const getMaterialUseCase = new GetMaterialUseCase(materialRepository);

export const getMaterialController = async (req: Request, res: Response) => {
  const materials = await getMaterialUseCase.execute();
  res.json('coucou');
};
