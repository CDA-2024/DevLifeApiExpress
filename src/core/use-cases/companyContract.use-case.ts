import { CompanyContractSequelizeRepository } from "../../infrastructure/repository/companyContract.repository.sequilize";
import { CompanyContract } from "../entities/companyContract.entity";
import { BaseUseCase } from "./base.use-case";

export class CompanyContractUseCase extends BaseUseCase<CompanyContract> {
  constructor() {
    super(new CompanyContractSequelizeRepository());
  }
}
