import { MaterialSequelizeRepository } from "../../infrastructure/repository/material.repository.sequelize";
import { Material } from "../entities/material.entity";
import { BaseUseCase } from "./base.use-case";

export class MaterialUseCase extends BaseUseCase<Material> {
  constructor() {
    super(new MaterialSequelizeRepository());
  }
}
