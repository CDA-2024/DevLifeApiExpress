import { NextFunction, Request, Response } from "express";
import { UsersUseCase } from "../../core/use-cases/user.use-case";
import { generateTokenAndSetCookie } from "../utils/generateToken";

const usersUseCase = new UsersUseCase();

export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await usersUseCase.getAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usersUseCase.getById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const saveUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usersUseCase.save(req.body);
    generateTokenAndSetCookie(user, res);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await usersUseCase.delete(req.params.id);
    res.json();
  } catch (error) {
    next(error);
  }
};
