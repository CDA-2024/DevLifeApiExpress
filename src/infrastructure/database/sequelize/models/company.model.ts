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
  declare createdAt: CreationOptional<Date>;
  declare updateAt: CreationOptional<Date>;
}

CompanyModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    experience: { type: DataTypes.STRING, allowNull: false },
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
    tableName: "company",
    timestamps: true,
  }
);

export { CompanyModel };