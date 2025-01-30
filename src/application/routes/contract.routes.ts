import { Router } from "express";
import {
  getContractController,
  getContractByIdController,
  saveContractController,
  deleteContractController,
} from "../controllers/contract.controller";

const router = Router();

router.get("/", getContractController);
router.get("/:id", getContractByIdController);
router.post("/", saveContractController);
router.delete("/", deleteContractController);

export default router;
