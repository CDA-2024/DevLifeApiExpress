import { Router } from "express";
import userRoutes from "./user.routes";
import materialRoutes from "./material.routes";
import employeeCompagnyRoutes from "./employeeCompagny.routes";
import materialSkillRoutes from "./materialSkill.routes";
import companyRoutes from "./company.routes";
import budgetRoutes from "./budget.routes";
import materialCmRoutes from "./materialCm.routes";
import contractRoutes from "./contract.routes";
import companyContractRoutes from "./companyContract.routes";
import employeeRoutes from "./employee.routes"
import employeeSkillRoute from "./employeeSkill.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/materials", materialRoutes);
router.use("/materialSkill", materialSkillRoutes);
router.use("/company", companyRoutes);
router.use("/budget", budgetRoutes);
router.use("/materialCm", materialCmRoutes);
router.use("/employeeSkill", employeeSkillRoute);
router.use("/employeeCompagny", employeeCompagnyRoutes);
router.use("/contracts", contractRoutes);
router.use("/companyContracts", companyContractRoutes);
router.use("/employee", employeeRoutes);

export default router;
