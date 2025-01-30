import { Request, Response } from "express";
import { UserMongooseRepository } from "../../infrastructure/repository/user.repository.mongoose";
import { GetUsersUseCase } from "../../core/use-cases/user.use-case";

const userRepository = new UserMongooseRepository();
const getUsersUseCase = new GetUsersUseCase(userRepository);

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsersUseCase.execute();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); //TODO: Implement error handler
  }
};
