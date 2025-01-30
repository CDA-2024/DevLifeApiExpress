import { Router } from "express";
import userRoutes from "./user.routes";
import materialRoutes from "./material.routes";
import budgetRoutes from "./budget.routes";
import materialCmRoutes from "./materialCm.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/materials", materialRoutes);
router.use("/budgets", budgetRoutes);
router.use("/materialCm", materialCmRoutes);

export default router;
