import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserResolver } from '../resolvers/user.resolver';
import { PrismaService } from '../services/prisma.service';

@Module({
  providers: [PrismaService, UserResolver, UserService],
})
export class UserModule {}
