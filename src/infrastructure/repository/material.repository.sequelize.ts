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
          material.image_url
        )
    );
  }

  async save(material: Material): Promise<void> {}
}
