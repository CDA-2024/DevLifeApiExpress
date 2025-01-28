import { CompanyContract } from "../entities/companyContract.entity";
import { Repository } from "./repository.repository.interface";

export interface CompanyContractRepository
  extends Repository<CompanyContract> {}
