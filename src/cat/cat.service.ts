import { Injectable, Inject, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CatSchema, CatDocument, Cat } from '../../schema/cat.schema';
import { createCat } from '../../dto/createCat.dto';
import { Model } from 'mongoose';

@Injectable()
@UseInterceptors(CacheInterceptor)
export class catService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<CatDocument>,
    @Inject(CACHE_MANAGER) private catCache: Cache,
  ) {
  }

  async createNewCat(createCat: createCat): Promise<Cat> {
    try {
      const newCat = new this.catModel(createCat);
      return newCat.save();
    } catch (e) {
      throw e;
    }
  }

  async getAllCats(): Promise<Cat[]> {
    try {
      return await this.catModel.find();
    } catch (e) {
      throw e;
    }
  }

  async getCatsById(id: String): Promise<Cat> {
    try {
      return await this.catModel.findById(id);
    } catch (e) {
      throw e;
    }
  }

  getCache() : Promise<string>  {
    return this.catCache.get('user');
  }

  async setCache() {
      await this.catCache.set('user', 'Quy', { ttl: 1000 });
  }
}
