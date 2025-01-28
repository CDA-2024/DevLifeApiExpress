import { User } from "../../entities/user.entity";
import { UserRepository } from "../../interfaces/user.repository.interface";

export class GetUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
