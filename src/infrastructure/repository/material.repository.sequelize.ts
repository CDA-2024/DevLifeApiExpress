import { Material } from "../../core/entities/material.entity";
import { MaterialRepository } from "../../core/interfaces/material.repository.interface";
import { MaterialModel } from "../database/sequelize/models/material.model";

export class MaterialSequelizeRepository implements MaterialRepository {
  async findAll(): Promise<Material[]> {
    const materials = await MaterialModel.findAll();
    return materials.map(
      (material) =>
        new Material(
          material.id,
          material.id_material_skill,
          material.name,
          material.type,
          material.description,
          material.image_url,
          material.createdAt,
          material.updatedAt,
          material.isdeleted
        )
    );
  }

  async findById(id: string): Promise<Material | null> {
    const materials = await MaterialModel.findByPk(id);
    if (!materials) return null;
    return new Material(
      materials.id,
      materials.id_material_skill,
      materials.name,
      materials.type,
      materials.description,
      materials.image_url,
      materials.createdAt,
      materials.updatedAt,
      materials.isdeleted
    );
  }

  async save(entity: Material): Promise<Material> {
    const material = await MaterialModel.create({
      id: 0,
      id_material_skill: entity.idMaterialSkill,
      name: entity.name,
      type: entity.type,
      description: entity.description,
      image_url: entity.imageUrl,
      isdeleted: false,
    });
    return new Material(
      material.id,
      material.id_material_skill,
      material.name,
      material.type,
      material.description,
      material.image_url,
      material.createdAt,
      material.updatedAt,
      material.isdeleted
    );
  }

  async delete(id: string): Promise<void> {
    await MaterialModel.destroy({ where: { id } });
  }
}
