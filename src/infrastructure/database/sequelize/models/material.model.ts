import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";
export class MaterialModel extends Model {
  id!: number;
  id_material_skill!: number;
  name!: string;
  type!: string;
  description!: string;
  image_url!: string;
}

MaterialModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idMaterialSkill: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, tableName: "materials" }
);
