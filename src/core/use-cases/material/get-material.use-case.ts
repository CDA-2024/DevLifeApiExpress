import { Material } from "../../entities/material.entity";
import { MaterialRepository } from "../../interfaces/material.repository.interface";

export class GetMaterialUseCase {
  constructor(private readonly materialRepository: MaterialRepository) {}

  async execute(): Promise<Material[]> {
    return this.materialRepository.findAll();
  }
}
