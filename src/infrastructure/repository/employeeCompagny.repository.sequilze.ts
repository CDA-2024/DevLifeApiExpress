import { CompagnyEmployee } from "../../core/entities/compagnyEmployee.entity";
import { EmployeeCompagnyRepository } from "../../core/interfaces/employeCompagny.repository.interface";
import { CompagnyEmployeeModel } from "../database/sequelize/models/compagnyEmployee.model";

export class EmployeeCompagnySequilizeRepository
  implements EmployeeCompagnyRepository
{
  async findAll(): Promise<CompagnyEmployee[]> {
    const compagnyEmployees = await CompagnyEmployeeModel.findAll();
    return compagnyEmployees.map(
      (compagnyEmployee) =>
        new CompagnyEmployee(
          compagnyEmployee.id,
          compagnyEmployee.id_employee,
          compagnyEmployee.id_compagny,
          compagnyEmployee.isavalaible,
          compagnyEmployee.experience,
          compagnyEmployee.createdAt,
          compagnyEmployee.updatedAt,
          compagnyEmployee.isdeleted
        )
    );
  }

  async findById(id: string): Promise<CompagnyEmployee | null> {
    const compagnyEmployee = await CompagnyEmployeeModel.findByPk(id);

    if (!compagnyEmployee) {
      return null;
    }

    return new CompagnyEmployee(
      compagnyEmployee.id,
      compagnyEmployee.id_employee,
      compagnyEmployee.id_compagny,
      compagnyEmployee.isavalaible,
      compagnyEmployee.experience,
      compagnyEmployee.createdAt,
      compagnyEmployee.updatedAt,
      compagnyEmployee.isdeleted
    );
  }

  async save(entity: CompagnyEmployee): Promise<CompagnyEmployee> {
    const [compagnyEmployee, _created] = await CompagnyEmployeeModel.upsert({
      id: entity.id,
      id_employee: entity.id_employee,
      id_compagny: entity.id_compagny,
      isavalaible: entity.isavalaible,
      experience: entity.experience,
      isdeleted: entity.isdeleted,
    });

    return new CompagnyEmployee(
      compagnyEmployee.id,
      compagnyEmployee.id_employee,
      compagnyEmployee.id_compagny,
      compagnyEmployee.isavalaible,
      compagnyEmployee.experience,
      compagnyEmployee.createdAt,
      compagnyEmployee.updatedAt,
      compagnyEmployee.isdeleted
    );
  }

  async delete(id: string): Promise<void> {
    const result = await CompagnyEmployeeModel.destroy({
      where: { id },
    });

    if (result === 0) {
      throw new Error(`CompagnyEmployee with id ${id} not found.`);
    }
  }
}
