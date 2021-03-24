import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { catService } from './cat.service';
import { Cat } from '../../schema/cat.schema';
import { createCat } from '../../dto/createCat.dto';

@Controller('/cats')
export class CatController {
  constructor(private catService: catService) {
  }

  @Get()
  async getAllCat(): Promise<Cat[]> {
    return await this.catService.getAllCats();
  }

  @Get('/set/cache')
  async setCache() : Promise<string> {
     await this.catService.setCache();
     return 'Add Successfull'
  }

  @Get('/get/cache')
  async getCache(): Promise<string> {
    return await this.catService.getCache();
  }

  @Get('/:id')
  async getCatById(@Param('id') idCat: String): Promise<Cat> {
    return await this.catService.getCatsById(idCat);
  }

  @Post()
  async createNewCat(@Body() newCat: createCat): Promise<Cat> {
    return await this.catService.createNewCat(newCat);
  }

}
