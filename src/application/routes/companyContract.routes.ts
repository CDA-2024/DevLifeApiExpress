import { Router } from "express";
import {
  getCompanyContractController,
  getCompanyContractByIdController,
  saveCompanyContractController,
  deleteCompanyContractController,
} from "../controllers/companyContract.controller";

const router = Router();

router.get("/", getCompanyContractController);
router.get("/:id", getCompanyContractByIdController);
router.post("/", saveCompanyContractController);
router.delete("/", deleteCompanyContractController);

export default router;
