import { MaterialSkill } from "../../core/entities/materialSkill.entity";
import { MaterialSkillRepository } from "../../core/interfaces/materialSkill.repository.interface";
import { MaterialSkillModel } from "../database/sequelize/models/materialSkill.model";

export class MaterialSkillSequelizeRepository
  implements MaterialSkillRepository
{
  async findAll(): Promise<MaterialSkill[]> {
    const materialSkills = await MaterialSkillModel.findAll();
    return materialSkills.map(
      (materialSkill) => new MaterialSkill(materialSkill.id, materialSkill.name, materialSkill.created_at, materialSkill.updated_at, materialSkill.is_deleted)
    );
  }

  async findById(id: string): Promise<MaterialSkill | null> {
    const materialSkill = await MaterialSkillModel.findByPk(id);
    if (!materialSkill) return null;
    return new MaterialSkill(materialSkill.id, materialSkill.name, materialSkill.created_at, materialSkill.updated_at, materialSkill.is_deleted);
  }

  async save(entity: MaterialSkill): Promise<MaterialSkill> {
    const materialSkill = await MaterialSkillModel.create({
      id: 0,
      name: entity.name,
      is_deleted: false,
    });
    return new MaterialSkill(materialSkill.id, materialSkill.name, materialSkill.created_at, materialSkill.updated_at, materialSkill.is_deleted);
  }

  async delete(id: string): Promise<void> {
    await MaterialSkillModel.destroy({ where: { id } });
  }
}
