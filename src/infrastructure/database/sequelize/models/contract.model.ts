import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../config/db.config";

export class ContractModel extends Model<
  InferAttributes<ContractModel>,
  InferCreationAttributes<ContractModel>
> {
  declare id: number;
  declare title: string;
  declare type: string;
  declare imageUrl: string;
  declare description: string;
  declare reward: number;
  declare difficultyLevel: number;
  declare isDeleted: boolean;
  declare createdAt: CreationOptional<Date>;
  declare updateAt: CreationOptional<Date>;
}

ContractModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    reward: { type: DataTypes.INTEGER, allowNull: false },
    difficultyLevel: { type: DataTypes.INTEGER, allowNull: false },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
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
    tableName: "contract",
    timestamps: true,
  }
);
