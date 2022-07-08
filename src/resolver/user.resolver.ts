import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Resolver(User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.users();
  }
}
