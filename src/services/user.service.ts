import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, User } from '@prisma/client';
import { createHmac } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 用户注册
   * @param name 用户名
   * @param password 密码
   */
  async createUser(name: string, password: string): Promise<User> {
    // 生成盐
    const salt = bcrypt.genSaltSync();

    // 创建散列器
    const sha256Hash = createHmac('sha256', salt);

    // SHA-256 加密
    const sha256Password = sha256Hash.update(password).digest('hex');

    // 当前时间
    const currentDate = new Date();

    const user: Prisma.UserCreateInput = {
      name,
      password: sha256Password,
      gender: 0, // 性别(0:未知(默认),1:男,2:女,3:保密)
      salt: salt,
      status: 0, // 状态(0:正常(默认),1:已删除)
      createTime: currentDate,
      updateTime: currentDate,
    };
    return this.prisma.user.create({ data: user });
  }

  async user(input: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({
      where: input,
    });
  }
}
