import { Router } from "express";
import {
  getCompanyContractController,
  getCompanyContractByIdController,
  saveCompanyContractController,
  deleteCompanyContractController,
  getCompanyContractsByCompanyIdController,
} from "../controllers/companyContract.controller";

const router = Router();

router.get("/", getCompanyContractController);
router.get("/:id", getCompanyContractByIdController);
router.get("/company/:id", getCompanyContractsByCompanyIdController);
router.post("/", saveCompanyContractController);
router.delete("/:id", deleteCompanyContractController);

export default router;
