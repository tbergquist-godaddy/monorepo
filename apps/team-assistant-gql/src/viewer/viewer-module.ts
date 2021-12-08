import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user-module';

import { ViewerResolver } from './viewer-resolver';

@Module({
  providers: [ViewerResolver],
  imports: [UserModule],
})
export class ViewerModule {}
