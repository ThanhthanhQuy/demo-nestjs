import {isString, isNotEmpty} from "class-validator";

export class newDog {
  // @isString()
  name: String;

  // @isNotEmpty()
  owner: String;
}