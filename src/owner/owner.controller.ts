import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { newOwner } from '../../dto/owner';
import { Owner } from '../../schema/owner.schema';
import {Request, Response} from 'express';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {
  }

  @Post('/')
  async insertNewOwner(@Body() owner: newOwner): Promise<Owner> {
    return await this.ownerService.insertNewUser(owner)
  }
  // @UseInterceptors(ClassSerializerInterceptor)
  // @Get('/:id')
  // async Serial(): Promise<Owner> {
  //   return new newOwner({
  //   }
  // })
  @Get('/cookie')
  getCookie(@Req() request: Request) {
    return request.cookies
  }

  @Post('/cookie')
  setCookie(@Req() request: Request, @Res({ passthrough: true }) respond : Response) : string {
    const today = new Date()
    today.setTime(today.getTime() + 2*60*1000)

    respond.cookie('user', 'Quy', {expires : today})
    return request.cookies
  }

  @Get('/:id')
  async findOne(@Param('id') id: String): Promise<Owner> {
    return await this.ownerService.getOwner(id)
  }

}
