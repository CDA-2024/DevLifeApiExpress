import { Repository } from "../interfaces/repository.repository.interface";

export abstract class BaseUseCase<T> {
  protected repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  public async getAll(): Promise<T[]> {
    return await this.repository.findAll();
  }

  public async getById(id: string): Promise<T | null> {
    return await this.repository.findById(id);
  }

  public async save(data: Partial<T>): Promise<T> {
    return await this.repository.save(data as any);
  }

  public async delete(id: string): Promise<void> {
    return await this.repository.delete(id);
  }
}
