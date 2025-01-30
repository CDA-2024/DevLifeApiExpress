import { MaterialSkillSequelizeRepository } from "../../infrastructure/repository/materialSkill.repository.sequelize";
import { MaterialSkill } from "../entities/materialSkill.entity";
import { BaseUseCase } from "./base.use-case";

export class MaterialSkillUseCase extends BaseUseCase<MaterialSkill> {
  constructor() {
    super(new MaterialSkillSequelizeRepository());
  }
}
