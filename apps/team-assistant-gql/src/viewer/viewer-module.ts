import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma-module';

import { ViewerResolver } from './viewer-resolver';

@Module({
  providers: [ViewerResolver],
  imports: [PrismaModule],
})
export class ViewerModule {}
