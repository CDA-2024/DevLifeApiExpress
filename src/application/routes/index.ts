import { Router } from "express";
import userRoutes from "./user.routes";
import materialRoutes from "./material.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/materials", materialRoutes);

export default router;
