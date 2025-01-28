import { User } from "../entities/user.entity";
import { Repository } from "./repository.repository.interface";

export interface UserRepository extends Repository<User> {
}
