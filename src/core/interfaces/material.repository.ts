import { Material } from "../entities/material.entity";

export interface MaterialRepository {
  findAll(): Promise<Material[]>;
  save(material: Material): Promise<void>;
}
