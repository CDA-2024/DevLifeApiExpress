import { Request, Response } from "express";
import { UsersUseCase } from "../../core/use-cases/user.use-case";

const usersUseCase = new UsersUseCase();

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await usersUseCase.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const material = await usersUseCase.getById(req.params.id);
  res.json(material);
};

export const saveUserController = async (req: Request, res: Response) => {
  const material = await usersUseCase.save(req.body);
  res.json(material);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await usersUseCase.delete(req.params.id);
  res.json();
};
