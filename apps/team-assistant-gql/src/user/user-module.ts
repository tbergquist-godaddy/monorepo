import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma-module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DataLoaderInterceptor } from '@cobraz/nestjs-dataloader';

import { UserService } from './user-service';
import { UserResolver } from './user-resolver';
import { UserLoader } from './user-dataloader';

@Module({
  imports: [PrismaModule],
  providers: [
    UserResolver,
    UserService,
    UserLoader,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class UserModule {}
