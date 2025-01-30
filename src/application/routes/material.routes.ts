import { Router } from "express";
import {
  deleteMaterialController,
  getMaterialByIdController,
  getMaterialController,
  saveMaterialController,
} from "../controllers/material.controller";

const router = Router();

router.get("/", getMaterialController);
router.get("/:id", getMaterialByIdController);
router.post("/", saveMaterialController);
router.delete("/:id", deleteMaterialController);

export default router;
