import { Router } from "express";
import userRoutes from "./user.routes";
import materialRoutes from "./material.routes";
import contractRoutes from "./contract.routes";
import companyContractRoutes from "./companyContract.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/materials", materialRoutes);
router.use("/contracts", contractRoutes);
router.use("/companyContracts", companyContractRoutes);

export default router;
