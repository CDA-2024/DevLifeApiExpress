import { MaterialModel } from "../models/material.model";
import { MaterialSkillModel } from "../models/materialSkill.model";

MaterialModel.belongsTo(MaterialSkillModel, {
  foreignKey: "id_material_skill",
  as: "material_skill",
});

MaterialSkillModel.hasMany(MaterialModel, {
  foreignKey: "id_material_skill",
  as: "material",
});

export { MaterialModel, MaterialSkillModel };