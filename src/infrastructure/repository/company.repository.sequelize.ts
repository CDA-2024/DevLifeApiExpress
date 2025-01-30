import { Company } from "../../core/entities/company.entity";
import { CompanyModel } from "../database/sequelize/associations/company.associations";
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
          company.created_at,
          company.updated_at,
          company.is_deleted
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
        created_at: company.created_at,
        updated_at: company.updated_at,
        is_deleted: company.is_deleted,
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
      created_at: company.created_at,
      updated_at: company.updated_at,
      is_deleted: company.is_deleted,
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
