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
          material.created_at,
          material.updated_at,
          material.is_deleted
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
      materials.created_at,
      materials.updated_at,
      materials.is_deleted
    );
  }

  async save(material: Material): Promise<Material> {
    await MaterialModel.upsert({
      id: material.id,
      id_material_skill: material.id_material_skill,
      name: material.name,
      type: material.type,
      description: material.description,
      image_url: material.image_url,
      created_at: material.created_at,
      updated_at: material.updated_at,
      is_deleted: material.is_deleted,
    });
    return material;
  }

  async delete(id: string): Promise<void> {
    await MaterialModel.destroy({ where: { id } });
  }
}
