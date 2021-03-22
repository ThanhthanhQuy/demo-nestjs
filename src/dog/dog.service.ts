import { Injectable } from '@nestjs/common';
import { newDog } from '../../dto/createDog.dto';
import { Dog, DogDocument } from '../../schema/dog.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DogService {
  constructor(@InjectModel(Dog.name) private DogModel: Model<DogDocument>) {
  }

  async insertNewDog(dog: newDog): Promise<Dog> {
    try {
      const newDog = new this.DogModel(dog);
      return await newDog.save();
    } catch (e) {
      throw e;
    }
  }

  async getDog(id): Promise<Dog> {
    try {
      return await this.DogModel.findById(id);
    } catch (e) {
      throw e;
    }
  }
}
