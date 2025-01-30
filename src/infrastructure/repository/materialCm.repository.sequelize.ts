import { MaterialCm } from "../../core/entities/materialCm.entity";
import { MaterialCmRepository } from "../../core/interfaces/materialCm.repository.interface";
import { MaterialCmModel } from "../database/sequelize/models/materialCm.model";

export class MaterialCmSequelizeRepository implements MaterialCmRepository {
  async findAll(): Promise<MaterialCm[]> {
    const materialCms = await MaterialCmModel.findAll();
    if (!materialCms) return [];
    return materialCms.map(
      (materialCm) =>
        new MaterialCm(
          materialCm.id,
          materialCm.id_c_employee,
          materialCm.id_material,
          materialCm.created_at,
          materialCm.updated_at,
          materialCm.is_deleted
        )
    );
  }
  async findById(id: string): Promise<MaterialCm | null> {
    const materialCm = await MaterialCmModel.findByPk(id);
    if (!materialCm) return null;
    return new MaterialCm(
      materialCm.id,
      materialCm.id_c_employee,
      materialCm.id_material,
      materialCm.created_at,
      materialCm.updated_at,
      materialCm.is_deleted
    );
  }
  async save(entity: MaterialCm): Promise<MaterialCm> {
    await MaterialCmModel.upsert(entity);
    return entity;
  }

  async delete(id: string): Promise<void> {
    await MaterialCmModel.destroy({ where: { id } });
  }
}
