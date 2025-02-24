import { Request, Response } from "express";
import { EmployeeUseCase } from "../../core/use-cases/employee.use-case";

const EmployeeCompagnyUseCase = new EmployeeUseCase();

export const getEmployeesController = async (req: Request, res: Response) => {
  const materials = await EmployeeCompagnyUseCase.getAll();
  res.json(materials);
};

export const getEmployeeByIdController = async (
  req: Request,
  res: Response
) => {
  const material = await EmployeeCompagnyUseCase.getById(req.params.id);
  res.json(material);
};

export const saveEmployeeController = async (req: Request, res: Response) => {
  try {
    const employeeData = req.body;

    const employee = await EmployeeCompagnyUseCase.save(employeeData);
    res.status(201).json(employee);
  } catch (error) {
    console.error("Error saving employee:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the employee" });
  }
};

export const deleteEmployeeController = async (req: Request, res: Response) => {
  try {
    const employeeId = req.params.id;
    await EmployeeCompagnyUseCase.delete(employeeId);
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the employee" });
  }
};
