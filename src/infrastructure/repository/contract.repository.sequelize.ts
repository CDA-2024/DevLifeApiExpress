import { Contract } from "../../core/entities/contract.entity";
import { ContractRepository } from "../../core/interfaces/contract.repository.interface";
import { ContractModel } from "../database/sequelize/associations/contract.associations";

export class ContractSequelizeRepository implements ContractRepository {
  async findAll(): Promise<Contract[]> {
    const contracts = await ContractModel.findAll();
    return contracts.map(
      (contract) =>
        new Contract(
          contract.id,
          contract.title,
          contract.type,
          contract.image_url,
          contract.description,
          contract.reward,
          contract.difficulty_level,
          contract.is_deleted,
          contract.created_at,
          contract.updated_at
        )
    );
  }
  async findById(id: string): Promise<Contract | null> {
    const contract = await ContractModel.findByPk(id);
    if (contract) {
      const contractEntity: Contract = {
        id: contract.id,
        title: contract.title,
        type: contract.type,
        image_url: contract.image_url,
        description: contract.description,
        reward: contract.reward,
        difficulty_level: contract.difficulty_level,
        is_deleted: contract.is_deleted,
        created_at: contract.created_at,
        updated_at: contract.updated_at,
      };
      return contractEntity;
    }
    return null;
  }
  async save(contract: Contract): Promise<Contract> {
    await ContractModel.upsert({
      id: contract.id,
      title: contract.title,
      type: contract.type,
      image_url: contract.image_url,
      description: contract.description,
      reward: contract.reward,
      difficulty_level: contract.difficulty_level,
      is_deleted: contract.is_deleted,
      created_at: contract.created_at,
      updated_at: contract.updated_at,
    });
    return contract;
  }
  async delete(id: string): Promise<void> {
    const contract = await ContractModel.findByPk(id);
    if (contract) {
      await contract.destroy();
    }
  }
}
