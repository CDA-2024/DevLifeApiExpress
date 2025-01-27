import { Material } from "../../entities/material.entity";
import { MaterialRepository } from "../../interfaces/material.repository";

export class GetMaterialUseCase {
  constructor(private materialRepository: MaterialRepository) {}

  async execute(): Promise<Material[]> {
    return this.materialRepository.findAll();
  }
}
