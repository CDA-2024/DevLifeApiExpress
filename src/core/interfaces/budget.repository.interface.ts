import { Budget } from "../entities/budget.entity";
import { Repository } from "./repository.repository.interface";

export interface BudgetRepository extends Repository<Budget> {}
