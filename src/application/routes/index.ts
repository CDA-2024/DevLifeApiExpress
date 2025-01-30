import { Router } from "express";
import userRoutes from "./user.routes";
import materialRoutes from "./material.routes";
import employeeCompagnyRoutes from "./employeeCompagny.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/materials", materialRoutes);
router.use("/employeeCompagny", employeeCompagnyRoutes);

export default router;
