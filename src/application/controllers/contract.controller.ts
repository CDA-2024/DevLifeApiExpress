import { NextFunction, Request, Response } from "express";
import { ContractUseCase } from "../../core/use-cases/contract.use-case";

const contractUseCase = new ContractUseCase();

export const getContractController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const contracts = await contractUseCase.getAll();
    res.json(contracts);
  } catch (error) {
    next(error);
  }
};

export const getContractByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const contract = await contractUseCase.getById(req.params.id);
    res.json(contract);
  } catch (error) {
    next(error);
  }
};

export const saveContractController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const contract = await contractUseCase.save(req.body);
    res.status(201).json(contract);
  } catch (error) {
    next(error);
  }
};

export const deleteContractController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await contractUseCase.delete(req.params.id);
    res.json();
  } catch (error) {
    next(error);
  }
};
