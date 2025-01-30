import { EmployeeSkill } from "../../core/entities/employeeSkill.entity";
import { EmployeeSkillRepository } from "../../core/interfaces/employeeSkill.repository.interface";
import { EmployeeSkillModel } from "../database/sequelize/models/employeeSkill.model";

export class EmployeeSkillSequelizeRepository
  implements EmployeeSkillRepository
{
  async findAll(): Promise<EmployeeSkill[]> {
    const employeeSkills = await EmployeeSkillModel.findAll();

    return employeeSkills.map(
      (employeeSkill) =>
        new EmployeeSkill(
          employeeSkill.id,
          employeeSkill.name,
          employeeSkill.description,
          employeeSkill.created_at,
          employeeSkill.updated_at,
          employeeSkill.is_deleted
        )
    );
  }

  async findById(id: string): Promise<EmployeeSkill | null> {
    const employeeSkill = await EmployeeSkillModel.findByPk(id);

    if (!employeeSkill) {
      return null;
    }

    return new EmployeeSkill(
      employeeSkill.id,
      employeeSkill.name,
      employeeSkill.description,
      employeeSkill.created_at,
      employeeSkill.updated_at,
      employeeSkill.is_deleted
    );
  }

  async save(entity: EmployeeSkill): Promise<EmployeeSkill> {
    const [employeeSkill, _created] = await EmployeeSkillModel.upsert({
      id: entity.id,
      name: entity.name,
      description: entity.description,
      is_deleted: entity.is_deleted,
    });

    return new EmployeeSkill(
      employeeSkill.id,
      employeeSkill.name,
      employeeSkill.description,
      employeeSkill.created_at,
      employeeSkill.updated_at,
      employeeSkill.is_deleted
    );
  }

  async delete(id: string): Promise<void> {
    const result = await EmployeeSkillModel.destroy({
      where: { id: id },
    });

    if (result === 0) {
      throw new Error(`EmployeeSkill with id ${id} not found.`);
    }
  }
}
