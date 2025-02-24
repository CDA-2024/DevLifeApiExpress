import { Request, Response } from "express";
import { CompanyContractUseCase } from "../../core/use-cases/companyContract.use-case";

const companyContractUseCase = new CompanyContractUseCase();

export const getCompanyContractController = async (
  req: Request,
  res: Response
) => {
  const companyContracts = await companyContractUseCase.getAll();
  res.json(companyContracts);
};

export const getCompanyContractByIdController = async (
  req: Request,
  res: Response
) => {
  const companyContract = await companyContractUseCase.getById(req.params.id);
  res.json(companyContract);
};

export const getCompanyContractsByCompanyIdController = async (
  req: Request,
  res: Response
) => {
  const companyContracts = await companyContractUseCase.getCompanyContractsByCompanyId(
    parseInt(req.params.id)
  );
  res.json(companyContracts);
};

export const saveCompanyContractController = async (
  req: Request,
  res: Response
) => {
  const companyContract = await companyContractUseCase.save(req.body);
  res.json(companyContract);
};

export const deleteCompanyContractController = async (
  req: Request,
  res: Response
) => {
  await companyContractUseCase.delete(req.params.id);
  res.json();
};
