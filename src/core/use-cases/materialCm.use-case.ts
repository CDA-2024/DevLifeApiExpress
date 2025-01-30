import { MaterialCmSequelizeRepository } from "../../infrastructure/repository/materialCm.repository.sequelize";
import { MaterialCm } from "../entities/materialCm.entity";
import { BaseUseCase } from "./base.use-case";

export class MaterialCmUseCase extends BaseUseCase<MaterialCm> {
    constructor() {
        super(new MaterialCmSequelizeRepository());
    }
}
