import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../config/db.config";

class CompanyModel extends Model<
  InferAttributes<CompanyModel>,
  InferCreationAttributes<CompanyModel>
> {
  declare id: number;
  declare id_user: number;
  declare name: string;
  declare experience: string;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
  declare is_deleted: boolean;
}

CompanyModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    experience: { type: DataTypes.STRING, allowNull: false },
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
    tableName: "company",
    timestamps: true,
    underscored: true,
  }
);

export { CompanyModel };
