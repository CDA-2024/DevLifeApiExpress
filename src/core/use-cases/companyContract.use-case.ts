import { CompanyContractSequelizeRepository } from "../../infrastructure/repository/companyContract.repository.sequelize";
import { CompanyContract } from "../entities/companyContract.entity";
import { BaseUseCase } from "./base.use-case";

export class CompanyContractUseCase extends BaseUseCase<CompanyContract> {
  protected repository!: CompanyContractSequelizeRepository;
  constructor() {
    super(new CompanyContractSequelizeRepository());
  }

  async getCompanyContractsByCompanyId(companyId: number): Promise<CompanyContract[]> {
    return await this.repository.getCompanyContractsByCompanyId(companyId);
  }
}
