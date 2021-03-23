import { Exclude, Expose, Transform } from 'class-transformer';
import { Dog } from '../schema/dog.schema';
import { Owner } from '../schema/owner.schema';
import * as mongoose from 'mongoose';
import { newDog } from './createDog.dto';

export class newOwner {
  firstName: String;
  lastName: String;
  address: String;

  @Exclude()
  password: String;

  @Expose()
  get getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // @Transform(({ value }) => value.name)
  // dog: String;

  constructor(partial : Partial<newOwner>) {
    Object.assign(this, partial)
  }
}
