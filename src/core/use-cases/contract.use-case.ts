import { ContractSequelizeRepository } from "../../infrastructure/repository/contract.repository.sequelize";
import { Contract } from "../entities/contract.entity";
import { BaseUseCase } from "./base.use-case";

export class ContractUseCase extends BaseUseCase<Contract> {
  constructor() {
    super(new ContractSequelizeRepository());
  }
}
