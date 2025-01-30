import { Router } from "express";
import { deleteEmployeeSkillController, getEmployeeSkillByIdController, getEmployeesSkillController, saveEmployeeSkillController } from "../controllers/employeeSkill.controller";

const router = Router();

router.get("/", getEmployeesSkillController);
router.get("/:id", getEmployeeSkillByIdController);
router.post("/", saveEmployeeSkillController);
router.put("/:id", saveEmployeeSkillController);
router.delete("/:id", deleteEmployeeSkillController);

export default router;
