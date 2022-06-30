import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  GraphQLBigInt as Bigint,
  GraphQLDateTime as DateTime,
} from 'graphql-scalars';

@ObjectType()
export class User {
  @Field(() => Bigint)
  id: any;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  gender?: number;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  signature?: string;

  @Field()
  password: string;

  @Field()
  salt: string;

  @Field(() => Int)
  status: number;

  @Field(() => DateTime)
  createTime: Date;

  @Field(() => DateTime)
  updateTime: Date;
}
