import { EmployeeCompagnySequilizeRepository } from "../../infrastructure/repository/employeeCompagny.repository.sequilze";
import { EmployeeCompagny } from "../entities/employeeCompagny.entity";
import { BaseUseCase } from "./base.use-case";

export class EmployeesCompagnyUseCase extends BaseUseCase<EmployeeCompagny> {
  constructor() {
    super(new EmployeeCompagnySequilizeRepository());
  }
}
