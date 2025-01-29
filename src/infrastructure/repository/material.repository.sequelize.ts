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

  async save(material: Material): Promise<Material> {
    await MaterialModel.upsert({
      id: material.id,
      id_material_skill: material.idMaterialSkill,
      name: material.name,
      type: material.type,
      description: material.description,
      image_url: material.imageUrl,
      createdAt: material.createdAt,
      updatedAt: material.updatedAt,
      isdeleted: material.isDeleted,
    });
    return material;
  }

  async delete(id: string): Promise<void> {
    await MaterialModel.destroy({ where: { id } });
  }
}
