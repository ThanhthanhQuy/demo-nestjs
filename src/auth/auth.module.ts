import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { secretConstant } from './constant';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule,
    PassportModule,
    JwtModule.register({
      secret: secretConstant.secret,
      signOptions: { expiresIn: '2 days' },
    })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {
}
