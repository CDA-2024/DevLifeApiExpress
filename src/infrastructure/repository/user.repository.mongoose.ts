import { User } from "../../core/entities/user.entity";
import { UserRepository } from "../../core/interfaces/user.repository.interface";
import { UserModel } from "../database/mongoose/schemas/user.schema";

export class UserMongooseRepository implements UserRepository {
  async findAll(): Promise<User[]> {
    const users = await UserModel.find();
    return users.map(
      (user) =>
        new User(
          user.id,
          user.name,
          user.email,
          user.password,
          user.role,
          user.is_tutorial_finished,
          user.created_at,
          user.updated_at,
          user.is_deleted
        )
    );
  }

  async findById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id);
    if (!user) return null;
    return new User(
      user.id,
      user.name,
      user.email,
      user.password,
      user.role,
      user.is_tutorial_finished,
      user.created_at,
      user.updated_at,
      user.is_deleted
    );
  }

  async save(user: User): Promise<User> {
    const savedUser = await UserModel.create({
      username: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    });
    return new User(
      savedUser.id,
      savedUser.name,
      savedUser.email,
      savedUser.password,
      savedUser.role,
      savedUser.is_tutorial_finished,
      user.created_at,
      user.updated_at,
      user.is_deleted
    );
  }

  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}
