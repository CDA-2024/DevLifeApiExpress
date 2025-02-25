import { CompanyUseCase } from "../../core/use-cases/company.use-case";
import { NextFunction, Request, Response } from "express";

const companyUseCase = new CompanyUseCase();

export const getCompanyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const companys = await companyUseCase.getAll();
    res.json(companys);
  } catch (error) {
    next(error);
  }
};

export const getCompanyByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const company = await companyUseCase.getById(req.params.id);
    res.json(company);
  } catch (error) {
    next(error);
  }
};

export const saveCompanyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const company = await companyUseCase.save(req.body);
    res.status(201).json(company);
  } catch (error) {
    next(error);
  }
};

export const deleteCompanyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await companyUseCase.delete(req.params.id);
    res.json();
  } catch (error) {
    next(error);
  }
};
