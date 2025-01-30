import { Router } from "express";
import { deleteEmlployeesCompagnyController, getEmlployeesCompagnyByIdController, getEmlployeesCompagnyController, saveEmlployeesCompagnyController } from "../controllers/employeeCompagny.controller";

const router = Router();

router.get("/", getEmlployeesCompagnyController);

router.get("/:id", getEmlployeesCompagnyByIdController);

router.post("/", saveEmlployeesCompagnyController);

router.put("/:id", saveEmlployeesCompagnyController);

router.delete("/:id", deleteEmlployeesCompagnyController);


export default router;