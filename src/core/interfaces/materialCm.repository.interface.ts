import { MaterialCm } from "../entities/materialCm.entity";

export interface MaterialCmRepository {
    findAll(): Promise<MaterialCm[]>;
    findById(id: string): Promise<MaterialCm | null>;
    save(entity: MaterialCm): Promise<MaterialCm>;
    delete(id: string): Promise<void>;
} 