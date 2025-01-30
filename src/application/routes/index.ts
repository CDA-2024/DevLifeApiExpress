import { Router } from "express";
import userRoutes from "./user.routes";
import materialRoutes from "./material.routes";
import materialSkillRoutes from "./materialSkill.routes";
import companyRoutes from "./company.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/materials", materialRoutes);
router.use("/materialSkill", materialSkillRoutes);
router.use("/company", companyRoutes);

export default router;
