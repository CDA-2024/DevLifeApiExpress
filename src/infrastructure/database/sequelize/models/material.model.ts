import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../config/db.config";
class MaterialModel extends Model<
  InferAttributes<MaterialModel>,
  InferCreationAttributes<MaterialModel>
> {
  declare id: number;
  declare id_material_skill: number;
  declare name: string;
  declare type: string;
  declare description: string;
  declare image_url: string;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
  declare is_deleted: boolean;
}

MaterialModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_material_skill: { type: DataTypes.INTEGER, allowNull: false },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: { len: [3, 100] },
    },
    type: { type: DataTypes.STRING(100), allowNull: false },
    description: { type: DataTypes.STRING(255), allowNull: false },
    image_url: { type: DataTypes.STRING(255), allowNull: false },
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
  { sequelize, tableName: "material", underscored: true, timestamps: true }
);

export { MaterialModel };
