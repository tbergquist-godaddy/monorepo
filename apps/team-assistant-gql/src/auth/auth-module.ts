import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user-module';

import { AuthResolver } from './auth-resolver';
import { AuthService } from './auth-service';

@Module({
  providers: [AuthService, AuthResolver],
  exports: [AuthService],
  imports: [UserModule],
})
export class AuthModule {}
