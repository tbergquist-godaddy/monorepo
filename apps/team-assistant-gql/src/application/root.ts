import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ViewerModule } from 'src/viewer/viewer-module';
import { PrismaModule } from 'src/prisma/prisma-module';
import { UserModule } from 'src/user/user-module';
import { TeamModule } from 'src/team/team-module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DataLoaderInterceptor } from '@cobraz/nestjs-dataloader';
import { AuthModule } from 'src/auth/auth-module';
import { AuthMiddleware } from 'src/auth/auth-middleware';
import { ValidationsModule } from 'src/validations/validations-module';

const { NODE_ENV } = process.env;

@Module({
  imports: [
    ViewerModule,
    PrismaModule,
    UserModule,
    TeamModule,
    AuthModule,
    ValidationsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: NODE_ENV !== 'production',
      introspection: NODE_ENV !== 'production',
      context: ({ req }) => {
        return {
          user: req.user,
        };
      },
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({ path: '*', method: RequestMethod.POST });
  }
}
