import { EmployeeCompagnySequilizeRepository } from "../../../infrastructure/repository/employeeCompagny.repository.sequilze";
import { EmployeeCompagny } from "../../entities/employeeCompagny.entity";

export class GetEmlployeesCompagny {
  constructor(
    private readonly employeeCompagnyRepository: EmployeeCompagnySequilizeRepository
  ) {}

  async findall(): Promise<EmployeeCompagny[]> {
    const result = await this.employeeCompagnyRepository.findAll();

    if (!result) {
      throw new Error("Employee not found");
    }

    return result;
  }

  async findById (id: string): Promise<EmployeeCompagny> {
    const result = await this.employeeCompagnyRepository.findById(id);

    if (!result) {
      throw new Error("Employee not found");
    }

    return result;
  }
}
