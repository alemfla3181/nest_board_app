import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth_credential.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        const { username, password } = authCredentialsDto;
        const user = this.create({ username, password });

        await this.save(user);
    }
}