import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../config/db.config";

class EmployeeCompagnyModel extends Model<
  InferAttributes<EmployeeCompagnyModel>,
  InferCreationAttributes<EmployeeCompagnyModel>
> {
  declare id: number;
  declare id_employee: number;
  declare id_compagny: number;
  declare isavalaible: boolean;
  declare experience: number;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
  declare is_deleted: boolean;
}

EmployeeCompagnyModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_employee: { type: DataTypes.INTEGER, allowNull: false },
    id_compagny: { type: DataTypes.INTEGER, allowNull: false },
    isavalaible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    experience: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
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
    tableName: "employee_compagny",
    underscored: true,
    timestamps: true,
  }
);

export { EmployeeCompagnyModel };
