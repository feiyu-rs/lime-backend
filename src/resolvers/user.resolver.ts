import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { from, map, Observable } from 'rxjs';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  /**
   * 用户注册
   * @param name 用户名
   * @param password 密码
   */
  @Mutation(() => User)
  createUser(
    @Args('name') name: string,
    @Args('password') password: string,
  ): Observable<User> {
    return from(this.userService.createUser(name, password)).pipe(
      map((u) => u),
    );
  }

  @Query(() => User)
  getUserById(@Args('id') id: number): Observable<User> {
    return from(this.userService.user({ id })).pipe(map((u) => u));
  }
}
