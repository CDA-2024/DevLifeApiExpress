import { CompanySequelizeRepository } from "../../infrastructure/repository/company.repository.sequelize";
import { Company } from "../entities/company.entity";
import { BaseUseCase } from "./base.use-case";

export class CompanyUseCase extends BaseUseCase<Company> {
  constructor() {
    super(new CompanySequelizeRepository());
  }
}
