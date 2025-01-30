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
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
  declare is_deleted: boolean;
}

BudgetModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_company: { type: DataTypes.INTEGER, allowNull: false },
    revenus: { type: DataTypes.FLOAT, allowNull: false },
    depenses: { type: DataTypes.FLOAT, allowNull: false },
    benefices: { type: DataTypes.FLOAT, allowNull: false },
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
    tableName: "budget",
    timestamps: true,
    underscored: true,
  }
);
