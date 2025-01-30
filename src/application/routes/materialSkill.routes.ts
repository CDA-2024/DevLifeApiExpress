import { Router } from "express";
import {
  deleteMaterialSkillController,
  getMaterialSkillByIdController,
  getMaterialSkillController,
  saveMaterialSkillController,
} from "../controllers/materialSkill.controller";

const router = Router();

router.get("/", getMaterialSkillController);
router.get("/:id", getMaterialSkillByIdController);
router.post("/", saveMaterialSkillController);
router.put("/:id", saveMaterialSkillController);
router.delete("/:id", deleteMaterialSkillController);

export default router;
