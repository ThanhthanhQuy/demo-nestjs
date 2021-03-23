import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { newOwner } from '../../dto/owner';
import { Owner } from '../../schema/owner.schema';
import mongoose, { Schema, Types, ObjectId } from 'mongoose';

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

  @Get('/:id')
  async findOne(@Param('id') id: String): Promise<Owner> {
    return await this.ownerService.getOwner(id)
  }
}
