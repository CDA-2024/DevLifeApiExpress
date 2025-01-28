import { Employee } from "../entities/employee.entity";
import { Repository } from "./repository.repository.interface";

export interface EmployeeRepository extends Repository<Employee> {}
