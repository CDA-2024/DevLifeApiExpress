import { Router } from "express";
import { getBudgetController, getBudgetByIdController, saveBudgetController, deleteBudgetController } from "../controllers/budget.controller";

const router = Router();

router.get("/", getBudgetController);
router.get("/:id", getBudgetByIdController);
router.post("/", saveBudgetController);
router.delete("/:id", deleteBudgetController);


export default router;
