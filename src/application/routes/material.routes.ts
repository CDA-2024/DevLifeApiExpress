import { Router } from "express";
import {
  createMaterialController,
  deleteMaterialController,
  getMaterialByIdController,
  getMaterialController,
} from "../controllers/material.controller";

const router = Router();

router.get("/materials", getMaterialController);
router.get("/materials/:id", getMaterialByIdController);
router.post("/materials", createMaterialController);
router.put("/materials/:id", createMaterialController);
router.delete("/materials/:id", deleteMaterialController);

export default router;
