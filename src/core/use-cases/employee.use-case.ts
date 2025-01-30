
import { EmployeeSequilizeRepository } from "../../infrastructure/repository/employee.repository.sequilize";
import { Employee } from "../entities/employee.entity";
import { BaseUseCase } from "./base.use-case";

export class EmployeeUseCase extends BaseUseCase<Employee> {
  constructor() {
    super(new EmployeeSequilizeRepository())
  }
}