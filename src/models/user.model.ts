import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  GraphQLBigInt as Bigint,
  GraphQLDateTime as DateTime,
} from 'graphql-scalars';

@ObjectType()
export class User {
  @Field(() => Bigint)
  id: any;
  @Field(() => DateTime)
  createTime: Date;
  @Field(() => DateTime)
  updateTime: Date;
  /// 自动生成 Field
  name: string;
  gender?: number;
  avatar?: string;
  email?: string;
  phone?: string;
  signature?: string;
  password: string;
  salt: string;
  status: number;
}
