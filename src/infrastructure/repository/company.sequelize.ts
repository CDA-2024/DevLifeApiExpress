import { Company } from "../../core/entities/company.entity";
import { CompanyModel } from "../database/sequelize/models/company.model";
import { CompanyRepository } from "../../core/interfaces/company.repository.interface";

export class CompanySequelizeRepository implements CompanyRepository {
  async findAll(): Promise<Company[]> {
    const companies = await CompanyModel.findAll();
    return companies.map(
      (company) =>
        new Company(
          company.id,
          company.id_user,
          company.name,
          company.experience,
          company.createdAt,
          company.updateAt
        )
    );
  }
  async findById(id: string): Promise<Company | null> {
    const company = await CompanyModel.findByPk(id);
    if (company) {
      const companyEntity: Company = {
        id: company.id,
        id_user: company.id_user,
        name: company.name,
        experience: company.experience,
        createdAt: company.createdAt,
        updateAt: company.updateAt,
      };
      return companyEntity;
    }
    return null;
  }

  async save(company: Company): Promise<Company> {
    await CompanyModel.upsert({
      id: company.id,
      id_user: company.id_user,
      name: company.name,
      experience: company.experience,
      createdAt: company.createdAt,
      updateAt: company.updateAt,
    });
    return company;
  }

  async delete(id: string): Promise<void> {
    const company = await CompanyModel.findByPk(id);
    if (company) {
      await company.destroy();
    }
  }
}
