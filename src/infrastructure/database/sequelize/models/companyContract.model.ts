import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../config/db.config";

class CompanyContractModel extends Model<
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
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
  declare is_deleted: boolean;
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
      defaultValue: false,
    },
    is_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    progress: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    start_date: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
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
    tableName: "companyContract",
    timestamps: true,
    underscored: true,
  }
);

export { CompanyContractModel };
