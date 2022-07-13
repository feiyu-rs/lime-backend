import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class User {
  @Field(() => GraphQLBigInt)
  id: any;
  name: string;
  gender?: number;
  avatar?: string;
  email?: string;
  phone?: string;
  signature?: string;
  password: string;
  salt: string;
  status: number;
  createTime: Date;
  updateTime: Date;
}
