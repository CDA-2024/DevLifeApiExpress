import { User } from "../../core/entities/user.entity";
import { UserRepository } from "../../core/interfaces/user.repository.interface";
import { UserModel } from "../database/mongoose/schemas/user.schema";

export class UserMongooseRepository implements UserRepository {
  async findAll(): Promise<User[]> {
    const users = await UserModel.find();
    return users.map((user) => new User(user._id, user.name, user.email, user.password, user.role, user.is_tutorial_finished, user.email_verified, user.verification_token, user.verification_token_expires, user.is_deleted));
  }

  async findById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id);
    if (!user) return null;
    return new User(user._id, user.name, user.email, user.password, user.role, user.is_tutorial_finished, user.email_verified, user.verification_token, user.verification_token_expires, user.is_deleted);
  }

  async findByName(name: string): Promise<User | null> {
    const user = await UserModel.findOne({ name: name });
    return user ? new User(user._id, user.name, user.email, user.password, user.role, user.is_tutorial_finished, user.email_verified, user.verification_token, user.verification_token_expires, user.is_deleted) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email: email });
    return user ? new User(user._id, user.name, user.email, user.password, user.role, user.is_tutorial_finished, user.email_verified, user.verification_token, user.verification_token_expires, user.is_deleted) : null;
  }

  async findByVerificationToken(token: string): Promise<User | null> {
    const user = await UserModel.findOne({ verification_token: token });
    return user ? new User(user._id, user.name, user.email, user.password, user.role, user.is_tutorial_finished, user.email_verified, user.verification_token, user.verification_token_expires, user.is_deleted) : null;
  }



  async save(user: User): Promise<User> {
    const savedUser = await UserModel.create({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      verification_token: user.verification_token,
      verification_token_expires: user.verification_token_expires,
    });
    return new User(
      savedUser._id,
      savedUser.name,
      savedUser.email,
      savedUser.password,
      savedUser.role,
      savedUser.is_tutorial_finished,
      savedUser.email_verified,
      savedUser.verification_token,
      savedUser.verification_token_expires,
      savedUser.is_deleted
    );
  }

  async update(user: User): Promise<User> {
    const updatedUser = await UserModel.findByIdAndUpdate(user._id, user, { new: true });
    if (!updatedUser) throw new Error("User not found");
    return new User(updatedUser._id, updatedUser.name, updatedUser.email, updatedUser.password, updatedUser.role, updatedUser.is_tutorial_finished, updatedUser.email_verified, updatedUser.verification_token, updatedUser.verification_token_expires, updatedUser.is_deleted);
  }

  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}
