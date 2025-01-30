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
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
  declare is_deleted: boolean;
}

MaterialCmModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_c_employee: { type: DataTypes.INTEGER, allowNull: false },
    id_material: { type: DataTypes.INTEGER, allowNull: false },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "material_cm",
    timestamps: true,
    underscored: true,
  }
);

export { MaterialCmModel };
