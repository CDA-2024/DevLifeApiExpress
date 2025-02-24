import { Router } from "express";
import {
  deleteUserController,
  getUserByIdController,
  getUsersController,
  saveUserController,
} from "../controllers/user.controller";

const router = Router();

router.get("/", getUsersController);
router.get("/:id", getUserByIdController);
router.post("/", saveUserController);
router.put("/:id", saveUserController);
router.delete("/:id", deleteUserController);

export default router;
