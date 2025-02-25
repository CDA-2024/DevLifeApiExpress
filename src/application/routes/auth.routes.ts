import { Router } from "express";
import { loginController, logoutController, registerController, verifyEmailController } from "../controllers/auth.controller";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/logout", logoutController);
router.get("/verify-email", verifyEmailController);

export default router;
