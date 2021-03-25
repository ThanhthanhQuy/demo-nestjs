import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { secretConstant } from './constant';
import {AuthService} from './auth.service';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretConstant.secret,
    });
  }

  validate(payload: any) {
    return {username : payload.username, userId : payload.sub}
  }
}