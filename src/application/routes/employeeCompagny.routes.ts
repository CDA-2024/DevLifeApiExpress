import { Router } from "express";
import {
  deleteEmployeeCompagnyController,
  getEmployeeCompagnyByIdController,
  getEmployeesCompagnyController,
  saveEmployeeCompagnyController,
} from "../controllers/employeeCompagny.controller";

const router = Router();

router.get("/", getEmployeesCompagnyController);
router.get("/:id", getEmployeeCompagnyByIdController);
router.post("/", saveEmployeeCompagnyController);
router.put("/:id", saveEmployeeCompagnyController);
router.delete("/:id", deleteEmployeeCompagnyController);

export default router;
