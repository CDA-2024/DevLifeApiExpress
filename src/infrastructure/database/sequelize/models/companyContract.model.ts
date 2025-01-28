import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../config/db.config";

export class CompanyContractModel extends Model<
  InferAttributes<CompanyContractModel>,
  InferCreationAttributes<CompanyContractModel>
> {
  declare id: number;
  declare id_company: number;
  declare id_contract: number;
  declare deadline: Date;
  declare is_accepted: boolean;
  declare is_completed: boolean;
  declare progress: number;
  declare start_date: Date;
  declare createdAt: CreationOptional<Date>;
  declare updateAt: CreationOptional<Date>;
}

CompanyContractModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_company: { type: DataTypes.INTEGER, allowNull: false },
    id_contract: { type: DataTypes.INTEGER, allowNull: false },
    deadline: { type: DataTypes.DATE, allowNull: false },
    is_accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    is_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    progress: { type: DataTypes.INTEGER, allowNull: false },
    start_date: { type: DataTypes.DATE, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updateAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    sequelize,
    tableName: "companyContract",
    timestamps: true,
  }
);
