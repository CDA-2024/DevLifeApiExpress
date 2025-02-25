import { Request, Response } from "express";
import { UsersUseCase } from "../../core/use-cases/user.use-case";
import { generateTokenAndSetCookie } from "../utils/generateToken";

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
  const user = await usersUseCase.getById(req.params.id);
  res.json(user);
};

export const saveUserController = async (req: Request, res: Response) => {
  const user = await usersUseCase.save(req.body);
  // generateTokenAndSetCookie(user, res);
  res.json(user);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await usersUseCase.delete(req.params.id);
  res.json();
};
