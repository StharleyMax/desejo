import { EntityRepository, Repository } from "typeorm";
import { User } from "../entitys/users.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{}