import { User } from "../entities/user.entity";
import { Repository } from "./repository.repository.interface";

export interface UserRepository extends Repository<User> {
    findByName(name: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByVerificationToken(token: string): Promise<User | null>;
}
