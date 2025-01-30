import { CompanyUseCase } from "../../core/use-cases/company.use-case";
import { Request, Response } from "express";

const companyUseCase = new CompanyUseCase();

export const getCompanyController = async (req: Request, res: Response) => {
  const companys = await companyUseCase.getAll();
  res.json(companys);
};

export const getCompanyByIdController = async (req: Request, res: Response) => {
  const company = await companyUseCase.getById(req.params.id);
  res.json(company);
};

export const saveCompanyController = async (req: Request, res: Response) => {
  const company = await companyUseCase.save(req.body);
  res.json(company);
};

export const deleteCompanyController = async (req: Request, res: Response) => {
  await companyUseCase.delete(req.params.id);
  res.json();
};
