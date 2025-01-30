import { EmployeeCompagny } from "../../core/entities/employeeCompagny.entity";
import { EmployeeCompagnyRepository } from "../../core/interfaces/employeCompagny.repository.interface";
import { EmployeeCompagnyModel } from "../database/sequelize/models/employeeCompagny.model";

export class EmployeeCompagnySequelizeRepository
  implements EmployeeCompagnyRepository
{
  async findAll(): Promise<EmployeeCompagny[]> {
    const compagnyEmployees = await EmployeeCompagnyModel.findAll();
    return compagnyEmployees.map(
      (compagnyEmployee) =>
        new EmployeeCompagny(
          compagnyEmployee.id,
          compagnyEmployee.id_employee,
          compagnyEmployee.id_compagny,
          compagnyEmployee.isavalaible,
          compagnyEmployee.experience,
          compagnyEmployee.created_at,
          compagnyEmployee.updated_at,
          compagnyEmployee.is_deleted
        )
    );
  }

  async findById(id: string): Promise<EmployeeCompagny | null> {
    const compagnyEmployee = await EmployeeCompagnyModel.findByPk(id);

    if (!compagnyEmployee) {
      return null;
    }

    return new EmployeeCompagny(
      compagnyEmployee.id,
      compagnyEmployee.id_employee,
      compagnyEmployee.id_compagny,
      compagnyEmployee.isavalaible,
      compagnyEmployee.experience,
      compagnyEmployee.created_at,
      compagnyEmployee.updated_at,
      compagnyEmployee.is_deleted
    );
  }

  async save(entity: EmployeeCompagny): Promise<EmployeeCompagny> {
    const [compagnyEmployee, _created] = await EmployeeCompagnyModel.upsert({
      id: entity.id,
      id_employee: entity.id_employee,
      id_compagny: entity.id_compagny,
      isavalaible: entity.isavalaible,
      experience: entity.experience,
      is_deleted: entity.is_deleted,
    });

    return new EmployeeCompagny(
      compagnyEmployee.id,
      compagnyEmployee.id_employee,
      compagnyEmployee.id_compagny,
      compagnyEmployee.isavalaible,
      compagnyEmployee.experience,
      compagnyEmployee.created_at,
      compagnyEmployee.updated_at,
      compagnyEmployee.is_deleted
    );
  }

  async delete(id: string): Promise<void> {
    const result = await EmployeeCompagnyModel.destroy({
      where: { id },
    });

    if (result === 0) {
      throw new Error(`CompagnyEmployee with id ${id} not found.`);
    }
  }
}
