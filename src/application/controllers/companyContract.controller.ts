import { NextFunction, Request, Response } from "express";
import { CompanyContractUseCase } from "../../core/use-cases/companyContract.use-case";

const companyContractUseCase = new CompanyContractUseCase();

export const getCompanyContractController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const companyContracts = await companyContractUseCase.getAll();
    res.json(companyContracts);
  } catch (error) {
    next(error);
  }
};

export const getCompanyContractByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const companyContract = await companyContractUseCase.getById(req.params.id);
    res.json(companyContract);
  } catch (error) {
    next(error);
  }
};

export const getCompanyContractsByCompanyIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const companyContracts =
      await companyContractUseCase.getCompanyContractsByCompanyId(
        parseInt(req.params.id)
      );
    res.json(companyContracts);
  } catch (error) {
    next(error);
  }
};

export const saveCompanyContractController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const companyContract = await companyContractUseCase.save(req.body);
    res.status(201).json(companyContract);
  } catch (error) {
    next(error);
  }
};

export const deleteCompanyContractController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await companyContractUseCase.delete(req.params.id);
    res.json();
  } catch (error) {
    next(error);
  }
};
