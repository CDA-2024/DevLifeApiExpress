import { Company } from "../entities/company.entity";
import { Repository } from "./repository.repository.interface";

export interface CompanyRepository extends Repository<Company> {}
