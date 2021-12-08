import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ViewerModule } from 'src/viewer/viewer-module';
import { PrismaModule } from 'src/prisma/prisma-module';
import { UserModule } from 'src/user/user-module';

const { NODE_ENV } = process.env;

@Module({
  imports: [
    ViewerModule,
    PrismaModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: NODE_ENV !== 'production',
      introspection: NODE_ENV !== 'production',
    }),
  ],
})
export class AppModule {}
