import { Material } from "../../entities/material.entity";
import { MaterialRepository } from "../../interfaces/material.repository.interface";
import { BaseUseCase } from "../base.use-case";

export class MaterialUseCase extends BaseUseCase<Material[]> {

  constructor(private readonly materialRepository: MaterialRepository) {
    super();
  }

  async create(entity: Material[]): Promise<Material[]> {
    throw new Error("Method not implemented.");
  }

  async read(id: string): Promise<Material[]> {
    const material = await this.materialRepository.findById(id);
    if (material === null) {
      return [];
    }
    return [material];
  }

  async update(entity: Material[]): Promise<Material[]> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async list(): Promise<Material[][]> {
    return [await this.materialRepository.findAll()];
  }

  // async execute(): Promise<Material[]> {
  //   return this.materialRepository.findAll();
  // }
}
