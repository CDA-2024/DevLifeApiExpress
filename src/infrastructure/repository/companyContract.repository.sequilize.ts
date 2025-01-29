import { CompanyContract } from "../../core/entities/companyContract.entity";
import { Contract } from "../../core/entities/contract.entity";
import { CompanyContractRepository } from "../../core/interfaces/companyContract.repository.interface";
import { CompanyContractModel } from "../database/sequelize/models/companyContract.model";

export class CompanyContractSequelizeRepository
  implements CompanyContractRepository
{
  async findAll(): Promise<CompanyContract[]> {
    const contracts = await CompanyContractModel.findAll();
    return contracts.map(
      (contract) =>
        new CompanyContract(
          contract.id,
          contract.id_company,
          contract.id_contract,
          contract.deadline,
          contract.is_accepted,
          contract.is_completed,
          contract.progress,
          contract.start_date,
          contract.createdAt,
          contract.updateAt
        )
    );
  }
  async findById(id: string): Promise<CompanyContract | null> {
    const contract = await CompanyContractModel.findByPk(id);
    if (contract) {
      return new CompanyContract(
        contract.id,
        contract.id_company,
        contract.id_contract,
        contract.deadline,
        contract.is_accepted,
        contract.is_completed,
        contract.progress,
        contract.start_date,
        contract.createdAt,
        contract.updateAt
      );
    }
    return null;
  }
  async save(companyContract: CompanyContract): Promise<CompanyContract> {
    await CompanyContractModel.upsert({
      id: companyContract.id,
      id_company: companyContract.id_company,
      id_contract: companyContract.id_contract,
      deadline: companyContract.deadline,
      is_accepted: companyContract.is_accepted,
      is_completed: companyContract.is_completed,
      progress: companyContract.progress,
      start_date: companyContract.start_date,
      createdAt: companyContract.createdAt,
      updateAt: companyContract.updateAt,
    });
    return companyContract;
  }
  async delete(id: string): Promise<void> {
    await CompanyContractModel.destroy({
      where: {
        id: id,
      },
    });
  }
}
