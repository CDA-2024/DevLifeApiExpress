import { Contract } from "../entities/contract.entity";
import { Repository } from "./repository.repository.interface";

export interface ContractRepository extends Repository<Contract> {}
