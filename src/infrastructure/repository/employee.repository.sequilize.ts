import { Employee } from "../../core/entities/employee.entity";
import { EmployeeRepository } from "../../core/interfaces/employee.repository.interface";
import { EmployeeModel } from "../database/sequelize/associations/employee.associations";

export class EmployeeSequilizeRepository implements EmployeeRepository {
  async findAll(): Promise<Employee[]> {
    const employees = await EmployeeModel.findAll();
    return employees.map(
      (employee) =>
        new Employee(
          employee.id,
          employee.name,
          employee.id_skill,
          employee.salary,
          employee.createdAt,
          employee.updatedAt,
          employee.isdeleted
        )
    );
  }

  async findById(id: string): Promise<Employee | null> {
    const employee = await EmployeeModel.findByPk(id);

    if (!employee) {
      return null;
    }

    return new Employee(
      employee.id,
      employee.name,
      employee.id_skill,
      employee.salary,
      employee.createdAt,
      employee.updatedAt,
      employee.isdeleted
    );
  }

  async save(entity: Employee): Promise<Employee> {
    const [employee, _created] = await EmployeeModel.upsert({
      id: entity.id,
      name: entity.name,
      id_skill: entity.id_skill,
      salary: entity.salary,
      isdeleted: entity.isDeleted,
    });

    return new Employee(
      employee.id,
      employee.name,
      employee.id_skill,
      employee.salary,
      employee.createdAt,
      employee.updatedAt,
      employee.isdeleted
    );
  }

  async delete(id: string): Promise<void> {
    const result = await EmployeeModel.destroy({
      where: { id: id },
    });

    if (result === 0) {
      throw new Error(`Employee with id ${id} not found.`);
    }
  }
}
