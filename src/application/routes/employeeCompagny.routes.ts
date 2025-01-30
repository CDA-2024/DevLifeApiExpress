import { Router } from "express";
import {
  deleteEmployeesCompagnyController,
  getEmployeeCompagnyByIdController,
  getEmployeesCompagnyController,
  saveEmployeesCompagnyController,
} from "../controllers/employeeCompagny.controller";

const router = Router();

router.get("/", getEmployeesCompagnyController);
router.get("/:id", getEmployeeCompagnyByIdController);
router.post("/", saveEmployeesCompagnyController);
router.put("/:id", saveEmployeesCompagnyController);
router.delete("/:id", deleteEmployeesCompagnyController);

export default router;
