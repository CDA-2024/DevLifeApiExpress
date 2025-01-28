import { Contract } from "../../entities/contract.entity";
import { ContractRepository } from "../../interfaces/contract.repository.interface";

export class GetContractUseCase {
  constructor(private contractRepository: ContractRepository) {}

  async execute(): Promise<Contract[]> {
    return this.contractRepository.findAll();
  }
}
