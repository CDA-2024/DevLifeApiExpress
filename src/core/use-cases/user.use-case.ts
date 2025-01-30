import { UserMongooseRepository } from "../../infrastructure/repository/user.repository.mongoose";
import { User } from "../entities/user.entity";
import { BaseUseCase } from "./base.use-case";

export class UsersUseCase extends BaseUseCase<User> {
  constructor() {
    super(new UserMongooseRepository());
  }
}
