import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Injector } from '@nestjs/core/injector/injector';
import { DogService } from './dog.service';
import { newDog } from '../../dto/createDog.dto';
import { Dog } from '../../schema/dog.schema';
import {validateInputNumber} from "../../pipe/ValidatePipe";

@Controller('/dog')
export class DogController {
  constructor(private readonly DogService: DogService) {
  }

  @Post()
  async createNewDog(@Body() dog: newDog): Promise<Dog> {
     return await this.DogService.insertNewDog(dog);
  }

  @Get('/number/:number')
  getNumber(@Param('number', validateInputNumber) id : number) : number {
    return id + 3
  }

  @Get('/:id')
  async getDogById(@Param('id') id : string) : Promise<Dog> {
    return await this.DogService.getDog(id)
  }

}
