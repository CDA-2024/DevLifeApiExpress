import { EmployeeCompagny } from "../entities/employeeCompagny.entity";
import { Repository } from "./repository.repository.interface";

export interface EmployeeCompagnyRepository
  extends Repository<EmployeeCompagny> {}
