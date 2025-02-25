import { UserMongooseRepository } from "../../infrastructure/repository/user.repository.mongoose";
import { User } from "../entities/user.entity";
import { BaseUseCase } from "./base.use-case";

export class UsersUseCase extends BaseUseCase<User> {
  protected repository!: UserMongooseRepository;
  constructor() {
    super(new UserMongooseRepository());
  }

  public async getByName(name: string): Promise<User | null> {
    return await this.repository.findByName(name);
  }

  public async getByEmail(email: string): Promise<User | null> {
    return await this.repository.findByEmail(email);
  }

  public async getByVerificationToken(token: string): Promise<User | null> {
    return await this.repository.findByVerificationToken(token);
  }

  public async update(user: User): Promise<User> {
    return await this.repository.update(user);
  }

  public async create(user: User): Promise<User> {
    return await this.repository.save(user);
  }
}
