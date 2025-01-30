import { Router } from "express";
import {
  deleteEmployeeController,
  getEmployeeByIdController,
  getEmployeesController,
  saveEmployeeController,
} from "../controllers/employee.controller";

const router = Router();

router.get("/", getEmployeesController);
router.get("/:id", getEmployeeByIdController);
router.post("/", saveEmployeeController);
router.put("/:id", saveEmployeeController);
router.delete("/:id", deleteEmployeeController);

export default router;
