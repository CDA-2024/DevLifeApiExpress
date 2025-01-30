import { Request, Response } from "express";
import { UsersUseCase } from "../../core/use-cases/user.use-case";


const usersUseCase = new UsersUseCase();

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await usersUseCase.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); //TODO: Implement error handler
  }
};
