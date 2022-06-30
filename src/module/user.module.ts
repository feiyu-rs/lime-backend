import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserResolver } from '../resolver/user.resolver';
import { PrismaService } from '../service/prisma.service';

@Module({
  providers: [PrismaService, UserResolver, UserService],
})
export class UserModule {}
