import { Request, Response } from "express";
import { ContractUseCase } from "../../core/use-cases/contract.use-case";

const contractUseCase = new ContractUseCase();

export const getContractController = async (req: Request, res: Response) => {
  const contracts = await contractUseCase.getAll();
  res.json(contracts);
};

export const getContractByIdController = async (
  req: Request,
  res: Response
) => {
  const contract = await contractUseCase.getById(req.params.id);
  res.json(contract);
};

export const saveContractController = async (req: Request, res: Response) => {
  const contract = await contractUseCase.save(req.body);
  res.json(contract);
};

export const deleteContractController = async (req: Request, res: Response) => {
  await contractUseCase.delete(req.params.id);
  res.json();
};
