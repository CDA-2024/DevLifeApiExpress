import { CompagnyEmployee } from "../entities/compagnyEmployee.entity";
import { Repository } from "./repository.repository.interface";

export interface EmployeeCompagnyRepository extends Repository<CompagnyEmployee> {}