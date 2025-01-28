import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../config/db.config";

class CompagnyEmployeeModel extends Model<
  InferAttributes<CompagnyEmployeeModel>,
  InferCreationAttributes<CompagnyEmployeeModel>
> {
  declare id: number;
  declare id_employee: number;
  declare id_compagny: number;
  declare isavalaible: boolean;
  declare experience: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare isdeleted: boolean;

}

CompagnyEmployeeModel.init(
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
  { sequelize, tableName: "employee_skill", timestamps: true }
);

export { CompagnyEmployeeModel };
