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
          contract.imageUrl,
          contract.description,
          contract.reward,
          contract.difficultyLevel,
          contract.isDeleted,
          contract.createdAt,
          contract.updateAt
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
        imageUrl: contract.imageUrl,
        description: contract.description,
        reward: contract.reward,
        difficultyLevel: contract.difficultyLevel,
        isDeleted: contract.isDeleted,
        createdAt: contract.createdAt,
        updateAt: contract.updateAt,
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
      imageUrl: contract.imageUrl,
      description: contract.description,
      reward: contract.reward,
      difficultyLevel: contract.difficultyLevel,
      isDeleted: contract.isDeleted,
      createdAt: contract.createdAt,
      updateAt: contract.updateAt,
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
