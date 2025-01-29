import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../config/db.config";

class MaterialCmModel extends Model<
    InferAttributes<MaterialCmModel>,
    InferCreationAttributes<MaterialCmModel>
> {
    declare id: number;
    declare id_c_employee: number;
    declare id_material: number;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare isdeleted: boolean;
}

MaterialCmModel.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        id_c_employee: { type: DataTypes.INTEGER, allowNull: false },
        id_material: { type: DataTypes.INTEGER, allowNull: false },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        isdeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: "material_cm",
        timestamps: true,
    }
);

export { MaterialCmModel }; 