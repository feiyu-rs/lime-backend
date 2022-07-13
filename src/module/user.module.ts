import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserResolver } from '../resolvers/user.resolver';
import { PrismaService } from '../services/prisma.service';
import { DateScalar } from '../common/scalars/DateTimeTz';

@Module({
  providers: [PrismaService, UserResolver, UserService, DateScalar],
})
export class UserModule {}
