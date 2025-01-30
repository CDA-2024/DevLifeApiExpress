import { EmployeeCompagnySequelizeRepository } from "../../infrastructure/repository/employeeCompagny.repository.sequelize";
import { EmployeeCompagny } from "../entities/employeeCompagny.entity";
import { BaseUseCase } from "./base.use-case";

export class EmployeeCompagnyUseCase extends BaseUseCase<EmployeeCompagny> {
  constructor() {
    super(new EmployeeCompagnySequelizeRepository());
  }
}
