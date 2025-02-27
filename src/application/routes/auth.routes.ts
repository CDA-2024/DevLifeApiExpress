import { Router } from "express";
import { 
    loginController, 
    logoutController, 
    registerController, 
    verifyEmailController,
    resendVerificationEmailController 
} from "../controllers/auth.controller";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/logout", logoutController);
router.get("/verify-email", verifyEmailController);
router.get("/resend-verification", resendVerificationEmailController);

export default router;
