import { EmployeeSkillSequelizeRepository } from "../../infrastructure/repository/employeeSkill.repository.sequelize";
import { EmployeeSkill } from "../entities/employeeSkill.entity";
import { BaseUseCase } from "./base.use-case";

export class EmployeeSkillUseCase extends BaseUseCase<EmployeeSkill> {
  constructor() {
    super(new EmployeeSkillSequelizeRepository());
  }
}