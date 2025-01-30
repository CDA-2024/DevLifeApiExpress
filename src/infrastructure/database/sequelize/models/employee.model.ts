import {
  InferCreationAttributes,
  InferAttributes,
  DataTypes,
  Model,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../config/db.config";

class EmployeeModel extends Model<
  InferAttributes<EmployeeModel>,
  InferCreationAttributes<EmployeeModel>
> {
  declare id: number;
  declare id_skill: number;
  declare name: string;
  declare salary: number;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
  declare is_deleted: boolean;
}

EmployeeModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_skill: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    salary: { type: DataTypes.INTEGER, allowNull: false },
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
  { sequelize, tableName: "employee", underscored: true, timestamps: true }
);

export { EmployeeModel };
