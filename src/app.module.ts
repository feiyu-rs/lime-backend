import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { UserModule } from './module/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: 'schema.gql',
      buildSchemaOptions: {
        // 使用 Int 来表示 number 类型
        numberScalarMode: 'integer',
      },
    }),
    UserModule,
  ],
})
export class AppModule {}
