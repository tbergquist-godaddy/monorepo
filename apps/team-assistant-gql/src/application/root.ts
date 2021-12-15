import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ViewerModule } from 'src/viewer/viewer-module';
import { PrismaModule } from 'src/prisma/prisma-module';
import { UserModule } from 'src/user/user-module';
import { TeamModule } from 'src/team/team-module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DataLoaderInterceptor } from '@cobraz/nestjs-dataloader';
import { AuthModule } from 'src/auth/auth-module';

const { NODE_ENV, USER_ID } = process.env;

@Module({
  imports: [
    ViewerModule,
    PrismaModule,
    UserModule,
    TeamModule,
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: NODE_ENV !== 'production',
      introspection: NODE_ENV !== 'production',
      context: ({ req }) => ({
        req,
        user: { id: USER_ID },
      }),
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class AppModule {}
