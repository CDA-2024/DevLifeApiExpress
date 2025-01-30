import { Router } from "express";
import {
  deleteCompanyController,
  getCompanyByIdController,
  getCompanyController,
  saveCompanyController,
} from "../controllers/company.controller";

const router = Router();

router.get("/", getCompanyController);
router.get("/:id", getCompanyByIdController);
router.post("/", saveCompanyController);
router.delete("/:id", deleteCompanyController);

export default router;
