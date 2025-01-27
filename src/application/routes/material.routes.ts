import { Router } from "express";
import { getMaterialController } from "../controllers/material.controller";

const router = Router();

router.get("/materials", getMaterialController);

export default router;
