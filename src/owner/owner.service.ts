import { ClassSerializerInterceptor, Injectable, UseInterceptors } from '@nestjs/common';
import { newOwner } from '../../dto/owner';
import { InjectModel } from '@nestjs/mongoose';
import { Owner, OwnerDocument } from '../../schema/owner.schema';
import { Model } from 'mongoose';
import { Dog, DogDocument } from '../../schema/dog.schema';
import { Injector } from '@nestjs/core/injector/injector';


@Injectable()

export class OwnerService {
  constructor(@InjectModel(Owner.name) private readonly ownerModel: Model<OwnerDocument>) {
  }

  async insertNewUser(owner: newOwner): Promise<Owner> {
    try {
      const newOwner = new this.ownerModel(owner);
      const docs = await newOwner.save();

      return docs;
    } catch (e) {
      throw e;
    }
  }

  async getOwner(id: String): Promise<Owner> {
    try {
      const owner = await this.ownerModel.findById(id);
      console.log(owner);
      return owner;
    } catch (e) {
      throw e;
    }
  }
}
