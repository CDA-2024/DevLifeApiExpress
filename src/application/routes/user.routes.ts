import { Router } from "express";
import {

  deleteUserController,
  getUserByIdController,
  getUsersController,
  saveUserController,

} from "../controllers/user.controller";

const router = Router();

router.get("/users", getUsersController);
router.get("/users/:id", getUserByIdController);
router.post("/users", saveUserController);
router.put("/users/:id", saveUserController);
router.delete("/users/:id", deleteUserController);

export default router;
