import {Body, Controller, Get, Param, ParseBoolPipe, Post} from '@nestjs/common'
import { AppService } from './app.service'
import { catService } from './cat/cat.service'
import { Cat } from '../schema/cat.schema' //model Cat
import { createCat } from '../dto/createCat.dto' //form upload
// import { CatController } from './cat/cat.controller'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }
  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/init')
  init(): object {
    return this.appService.init()
  }

  @Get(':/value')
  validate(@Param('value', new ParseBoolPipe()) value : Boolean) : String {
    if(!value) {return 'Value is false'}
    else return 'Value is true'
  }

  // @Get('/cats/:id')
  // async getCatById(@Param('id') id: String): Promise<Cat> {
  //   return await this.catService.getCatsById(id)
  // }
  //
  // @Get('/cats')
  // async getCats(): Promise<Cat[]> {
  //   return await this.catService.getAllCats()
  // }
  //
  // @Post('/cats')
  // async createCat(@Body() cat: createCat): Promise<Cat> {
  //   return await this.catService.createNewCat(cat)
  // }

}
