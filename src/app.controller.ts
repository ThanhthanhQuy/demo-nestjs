import { Request, Controller, Get, Param, ParseBoolPipe, Post, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import {LocalAuthGuard} from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {
  }

  @UseGuards(AuthGuard('local'))
  @Post('/init')
  init(): object {
    return this.appService.init();
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req) {
    console.log(req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/login')
  getAccess(@Request() req) {
    return req.user
  }

}
