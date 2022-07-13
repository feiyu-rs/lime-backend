import { MinLength } from 'class-validator';
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { GraphQLDateTime as DateTime } from 'graphql-scalars/scalars/iso-date/DateTime';

@ArgsType()
export class CreateUserArgs {
  name: string;
  gender?: number;
  avatar?: string;
  email?: string;
  phone?: string;
  signature?: string;
  password: string;
  salt: string;

  @Field(() => Int, { defaultValue: 0 })
  status: number;
  @Field(() => DateTime, { defaultValue: Date.now() })
  createTime: Date;
  @Field(() => DateTime, { defaultValue: Date.now() })
  updateTime: Date;
}
