import { Router } from "express";
import userRoutes from "./user.routes";
import materialRoutes from "./material.routes";
import materialSkillRoutes from "./materialSkill.routes";
import companyRoutes from "./company.routes";
import budgetRoutes from "./budget.routes";
import materialCmRoutes from "./materialCm.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/materials", materialRoutes);
router.use("/materialSkill", materialSkillRoutes);
router.use("/company", companyRoutes);
router.use("/budget", budgetRoutes);
router.use("/materialCm", materialCmRoutes);


export default router;
