import { Router } from "express";
import { getMaterialCmController, getMaterialCmByIdController, saveMaterialCmController, deleteMaterialCmController } from "../controllers/materialCm.controller";

const router = Router();

router.get("/", getMaterialCmController);
router.get("/:id", getMaterialCmByIdController);
router.post("/", saveMaterialCmController);
router.delete("/:id", deleteMaterialCmController);

export default router;
