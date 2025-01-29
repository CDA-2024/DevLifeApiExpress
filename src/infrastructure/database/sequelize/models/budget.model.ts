import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../config/db.config";

export class BudgetModel extends Model<
  InferAttributes<BudgetModel>,
  InferCreationAttributes<BudgetModel>
> {
  declare id: number;
  declare id_company: number;
  declare revenus: number;
  declare depenses: number;
  declare benefices: number;
  declare createdAt: CreationOptional<Date>;
  declare updateAt: CreationOptional<Date>;
}

BudgetModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_company: { type: DataTypes.INTEGER, allowNull: false },
    revenus: { type: DataTypes.FLOAT, allowNull: false },
    depenses: { type: DataTypes.FLOAT, allowNull: false },
    benefices: { type: DataTypes.FLOAT, allowNull: false },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updateAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "budget",
    timestamps: true,
  }
);
