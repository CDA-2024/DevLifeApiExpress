import { Router } from "express";
import {
  createMaterialSkillController,
  deleteMaterialSkillController,
  getMaterialSkillByIdController,
  getMaterialSkillController,
} from "../controllers/materialSkill.controller";

const router = Router();

router.get("/materialSkill", getMaterialSkillController);
router.get("/materialSkill/:id", getMaterialSkillByIdController);
router.post("/materialSkill", createMaterialSkillController);
router.put("/materialSkill/:id", createMaterialSkillController);
router.delete("/materialSkill/:id", deleteMaterialSkillController);

export default router;
