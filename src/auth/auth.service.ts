import { Injectable, UnauthorizedException } from '@nestjs/common';
import {UserService} from '../user/user.service';
import {JwtService} from '@nestjs/jwt'
import { throwError } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private userService : UserService, private jwtService : JwtService) {
  }
  authenUser(name : string, password : string) : any {
    const user = this.userService.findUser(name)
    // if(!user) {throw new UnauthorizedException()}
    if(user && user.password === password) {
      return user
    }
    return null
  }

  login(user : any) {
    const payload = {username : user.name, sub : user.uid}
    const accessToken = this.jwtService.sign(payload)
    if(!accessToken) {
      throw new UnauthorizedException()
    }
    return {accessToken}
  }
}
